import { Resend } from 'resend';

// Simple in-memory rate limiting map for sliding window
const ipRequests = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 10 minutes per IP

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return (typeof forwarded === 'string' ? forwarded : forwarded[0]).split(',')[0].trim();
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip) {
  if (!ip || ip === 'unknown' || ip === '127.0.0.1' || ip === '::1' || ip === 'localhost') {
    return true;
  }
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now - entry.startTime > RATE_LIMIT_WINDOW_MS) {
    ipRequests.set(ip, { count: 1, startTime: now });
    return true;
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  entry.count += 1;
  return true;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function parseRequestBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  if (typeof req.body === 'string' && req.body.trim().length > 0) {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return new Promise((resolve) => {
    let bodyData = '';
    req.on('data', (chunk) => {
      bodyData += chunk;
    });
    req.on('end', () => {
      try {
        resolve(bodyData ? JSON.parse(bodyData) : {});
      } catch {
        resolve({});
      }
    });
    req.on('error', () => resolve({}));
  });
}

function sendResponse(res, statusCode, data) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(data);
  }
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return sendResponse(res, 200, {});
  }

  if (req.method !== 'POST') {
    return sendResponse(res, 405, {
      success: false,
      message: 'Method Not Allowed. Use POST.'
    });
  }

  try {
    const body = await parseRequestBody(req);

    // 1. Honeypot check (hidden fields filled by bots)
    if (body.company_url || body.website || body._gotcha) {
      console.warn('Spam honeypot triggered. Silently ignoring submission.');
      return sendResponse(res, 200, {
        success: true,
        message: 'Your inquiry has been received!'
      });
    }

    // 2. Submission speed check (submitting faster than 1.5s is an automated bot)
    if (body.renderTime && typeof body.renderTime === 'number') {
      const timeElapsed = Date.now() - body.renderTime;
      if (timeElapsed < 1500) {
        console.warn('Bot detected (submission under 1.5s). Silently ignoring.');
        return sendResponse(res, 200, {
          success: true,
          message: 'Your inquiry has been received!'
        });
      }
    }

    // 3. IP Rate Limiting
    const clientIp = getClientIp(req);
    if (!checkRateLimit(clientIp)) {
      return sendResponse(res, 429, {
        success: false,
        message: 'Too many submissions from this connection. Please wait a few minutes before trying again.'
      });
    }

    // 4. Validate & Sanitize Inputs
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const projectType = typeof body.projectType === 'string' ? body.projectType.trim() : 'Business Website';
    const budget = typeof body.budget === 'string' ? body.budget.trim() : 'Not Specified';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || name.length < 2) {
      return sendResponse(res, 400, {
        success: false,
        message: 'Please provide your name (at least 2 characters).'
      });
    }

    if (name.length > 100) {
      return sendResponse(res, 400, {
        success: false,
        message: 'Name is too long (maximum 100 characters).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 254) {
      return sendResponse(res, 400, {
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Prevent header injection in email address
    if (/[\r\n]/.test(email)) {
      return sendResponse(res, 400, {
        success: false,
        message: 'Invalid email address.'
      });
    }

    if (!message || message.length < 10) {
      return sendResponse(res, 400, {
        success: false,
        message: 'Please provide a message with at least 10 characters describing your project.'
      });
    }

    if (message.length > 4000) {
      return sendResponse(res, 400, {
        success: false,
        message: 'Message is too long (maximum 4,000 characters).'
      });
    }

    // 5. Check API Key
    const apiKey = process.env.RESEND_API_KEY
      ? process.env.RESEND_API_KEY.replace(/^["']|["']$/g, '').trim()
      : '';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured in server environment variables.');
      return sendResponse(res, 500, {
        success: false,
        message: 'Server configuration error: RESEND_API_KEY is missing. Please add it to your environment variables.'
      });
    }

    const resend = new Resend(apiKey);
    const rawTo = process.env.CONTACT_TO_EMAIL || 'aazimsherazi@gmail.com';
    const toEmail = rawTo.replace(/^["']|["']$/g, '').trim();

    const rawFrom = process.env.CONTACT_FROM_EMAIL || 'Aazim Sherazi <contact@aazimsherazi.com>';
    const fromEmail = rawFrom.replace(/^["']|["']$/g, '').trim();

    // Submission time in human-readable UTC
    const submissionDate = new Date().toUTCString();

    // 6. Build Responsive HTML Template
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f5f8; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07); border: 1px solid #e5e7eb;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #161136 0%, #1f174a 100%); padding: 36px 32px; text-align: left;">
              <span style="display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #a5b4fc; margin-bottom: 8px;">
                Portfolio Contact Form
              </span>
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; line-height: 1.3;">
                🚀 New Project Inquiry
              </h1>
              <p style="margin: 6px 0 0 0; color: #cbd5e1; font-size: 14px;">
                Submitted via aazimsherazi.com
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              
              <!-- Client Summary Grid -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px; border-collapse: separate; border-spacing: 0 8px;">
                <tr>
                  <td width="35%" style="padding: 8px 12px; background-color: #f9fafb; border-radius: 8px 0 0 8px; font-size: 13px; font-weight: 600; color: #6b7280;">
                    Client Name:
                  </td>
                  <td width="65%" style="padding: 8px 12px; background-color: #f9fafb; border-radius: 0 8px 8px 0; font-size: 14px; font-weight: 700; color: #111827;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 12px; background-color: #f9fafb; border-radius: 8px 0 0 8px; font-size: 13px; font-weight: 600; color: #6b7280;">
                    Client Email:
                  </td>
                  <td style="padding: 8px 12px; background-color: #f9fafb; border-radius: 0 8px 8px 0; font-size: 14px; font-weight: 600; color: #4338ca;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #4338ca; text-decoration: none;">
                      ${escapeHtml(email)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 12px; background-color: #f9fafb; border-radius: 8px 0 0 8px; font-size: 13px; font-weight: 600; color: #6b7280;">
                    Service Requested:
                  </td>
                  <td style="padding: 8px 12px; background-color: #f9fafb; border-radius: 0 8px 8px 0; font-size: 14px; font-weight: 600; color: #047857;">
                    ${escapeHtml(projectType)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 12px; background-color: #f9fafb; border-radius: 8px 0 0 8px; font-size: 13px; font-weight: 600; color: #6b7280;">
                    Budget Expectation:
                  </td>
                  <td style="padding: 8px 12px; background-color: #f9fafb; border-radius: 0 8px 8px 0; font-size: 14px; font-weight: 700; color: #b45309;">
                    ${escapeHtml(budget)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 12px; background-color: #f9fafb; border-radius: 8px 0 0 8px; font-size: 13px; font-weight: 600; color: #6b7280;">
                    Submitted At:
                  </td>
                  <td style="padding: 8px 12px; background-color: #f9fafb; border-radius: 0 8px 8px 0; font-size: 13px; color: #6b7280;">
                    ${submissionDate}
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom: 28px;">
                <h3 style="font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #374151; margin: 0 0 10px 0;">
                  Client Project Details & Goals:
                </h3>
                <div style="padding: 20px; background-color: #f8fafc; border-left: 4px solid #4f46e5; border-radius: 4px 12px 12px 4px; font-size: 15px; line-height: 1.65; color: #1f2937; white-space: pre-wrap; word-break: break-word;">
${escapeHtml(message)}
                </div>
              </div>

              <!-- Direct Reply Action Button -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 24px; margin-bottom: 24px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(email)}?subject=Re:%20Website%20Inquiry%20-%20${encodeURIComponent(projectType)}" 
                       style="display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 14px 32px; border-radius: 30px; font-size: 15px; font-weight: 600; text-decoration: none; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
                      ✉️ Reply Directly to ${escapeHtml(name)}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Reply-To Reminder -->
              <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center; line-height: 1.5;">
                💡 <strong>Tip:</strong> You can also just hit "Reply" in your Gmail client. The <code>Reply-To</code> header is automatically set to <strong>${escapeHtml(email)}</strong>.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #f9fafb; border-top: 1px solid #f3f4f6; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                Sent securely via Aazim Sherazi Portfolio (<a href="https://aazimsherazi.com" style="color: #6366f1; text-decoration: none;">aazimsherazi.com</a>)
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // 7. Plain Text Fallback
    const textContent = `
New Project Inquiry Received from aazimsherazi.com
--------------------------------------------------

Client Name: ${name}
Client Email: ${email}
Service Requested: ${projectType}
Estimated Budget: ${budget}
Submitted At: ${submissionDate}

Client Message:
${message}

--------------------------------------------------
To reply to this inquiry, reply directly to this email or write to ${email}.
    `.trim();

    // 8. Dispatch Email via Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `🚀 New Project Inquiry: ${name} (${projectType})`,
      html: emailHtml,
      text: textContent
    });

    if (error) {
      console.error('Resend delivery error:', error);
      return sendResponse(res, 502, {
        success: false,
        message: error.message || 'Failed to dispatch email via Resend.'
      });
    }

    return sendResponse(res, 200, {
      success: true,
      message: 'Your project inquiry has been sent successfully!',
      id: data?.id
    });

  } catch (err) {
    console.error('Server error handling contact form:', err);
    return sendResponse(res, 500, {
      success: false,
      message: 'An unexpected error occurred while processing your inquiry.'
    });
  }
}
