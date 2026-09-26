import { useEffect } from 'react';

/**
 * Lightweight client-side SEO manager
 * Updates document title, meta description, and canonical URL on route change without external dependencies.
 */
const SEO = ({
  title = 'Aazim Sherazi | Turning Business Needs Into Web Solutions',
  description = 'Aazim Sherazi builds custom websites, ecommerce stores, booking platforms, and web applications tailored to real business needs.',
  canonical = 'https://aazimsherazi.com/',
  ogTitle,
  ogDescription,
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to safely update or create meta tags
    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', value);
      } else {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          element.setAttribute('name', selector.replace("meta[name='", '').replace("']", ''));
        } else if (selector.startsWith('meta[property=')) {
          element.setAttribute('property', selector.replace("meta[property='", '').replace("']", ''));
        }
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
    };

    // Update Meta Description
    setMetaTag("meta[name='description']", 'content', description);
    setMetaTag("meta[name='title']", 'content', title);

    // Update Open Graph tags
    setMetaTag("meta[property='og:title']", 'content', ogTitle || title);
    setMetaTag("meta[property='og:description']", 'content', ogDescription || description);
    setMetaTag("meta[property='og:url']", 'content', canonical);

    // Update Twitter Card tags
    setMetaTag("meta[name='twitter:title']", 'content', ogTitle || title);
    setMetaTag("meta[name='twitter:description']", 'content', ogDescription || description);

    // Update Canonical URL
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonical);
      document.head.appendChild(linkCanonical);
    }
  }, [title, description, canonical, ogTitle, ogDescription]);

  return null;
};

export default SEO;
