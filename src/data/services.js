import { 
  Globe, 
  ShoppingCart, 
  Calendar, 
  Stethoscope, 
  Utensils, 
  Megaphone, 
  RefreshCw, 
  Wrench,
  Zap,
  LayoutTemplate
} from 'lucide-react';

export const servicesData = [
  {
    id: "01",
    icon: Globe,
    title: "Business Website Development",
    shortDesc: "A professional website that makes your business look credible, attracts the right customers, and turns visitors into leads.",
    fullDesc: "Your website is often the first thing a potential customer sees. I build clean, fast, and professional websites that clearly communicate what your business does, build trust instantly, and motivate visitors to get in touch or make a purchase. No confusion, no clutter — just results.",
    features: [
      "Clear messaging designed for your target customers",
      "Fast loading on all devices including mobile",
      "Contact forms and lead capture built in",
      "Google-friendly structure from day one"
    ],
    businessBenefit: "More calls, more inquiries, more business.",
    idealFor: "Local businesses, service providers, professionals",
    tools: ["WordPress", "React", "Tailwind CSS"],
    path: "/contact"
  },
  {
    id: "02",
    icon: ShoppingCart,
    title: "eCommerce & Online Store Development",
    shortDesc: "A fully functional online store where your customers can browse, order, and pay — without leaving their couch.",
    fullDesc: "I build online stores that make shopping simple and enjoyable for your customers. From product listings to a smooth checkout experience, everything is designed to reduce drop-offs and increase completed purchases. Whether you sell 10 products or 10,000, your store will be ready to scale.",
    features: [
      "Easy product management you can handle yourself",
      "Secure payment integration (cards, bank transfer, COD)",
      "Mobile-optimized shopping experience",
      "Order tracking and customer email notifications"
    ],
    businessBenefit: "Sell online 24/7 without lifting a finger.",
    idealFor: "Retail brands, clothing stores, local sellers going online",
    tools: ["WooCommerce", "WordPress", "Stripe"],
    path: "/contact"
  },
  {
    id: "03",
    icon: Calendar,
    title: "Booking & Appointment Websites",
    shortDesc: "Let your customers book appointments online, 24/7 — so you spend less time on the phone and more time on your work.",
    fullDesc: "Whether you run a clinic, salon, gym, or consulting practice, I build websites that allow customers to book appointments at any time without calling you. Automatic confirmations, calendar sync, and reminders are all included. You wake up to a full schedule.",
    features: [
      "Online booking system customers can use any time",
      "Automated appointment confirmations and reminders",
      "Service and staff availability management",
      "Integrated with your existing tools and calendar"
    ],
    businessBenefit: "Fill your schedule without picking up the phone.",
    idealFor: "Clinics, salons, coaches, fitness studios, consultants",
    tools: ["WordPress", "Booking plugins", "WooCommerce"],
    path: "/contact"
  },
  {
    id: "04",
    icon: Megaphone,
    title: "Landing Pages for Marketing Campaigns",
    shortDesc: "A single focused page designed to turn your ad traffic into real customers — not just clicks.",
    fullDesc: "Running ads on Facebook, Instagram, or Google? The landing page is where your money is either made or lost. I design landing pages with one clear goal: get the visitor to take action. Every element — the headline, the layout, the button — is built to convert.",
    features: [
      "Headline and copy crafted to match your ad",
      "Clear call-to-action above the fold",
      "A/B test-ready structure",
      "Fast load speed to reduce bounce rate"
    ],
    businessBenefit: "More conversions from the same ad spend.",
    idealFor: "Marketing campaigns, product launches, lead generation",
    tools: ["React", "WordPress", "Tailwind CSS"],
    path: "/contact"
  },
  {
    id: "05",
    icon: Stethoscope,
    title: "Healthcare & Clinic Websites",
    shortDesc: "A professional online presence that helps patients find you, trust you, and book appointments without friction.",
    fullDesc: "Patients search for doctors and clinics online before calling. I build clean, trustworthy healthcare websites that show your services, introduce your team, and make it easy for patients to reach you or book a visit. Designed specifically for clinics, hospitals, and private practices.",
    features: [
      "Doctor profiles and specialization showcase",
      "Online appointment booking system",
      "Services and treatments clearly explained",
      "Professional trust signals and contact information"
    ],
    businessBenefit: "More patient inquiries and appointments from your area.",
    idealFor: "Clinics, hospitals, dentists, private practices",
    tools: ["WordPress", "Booking plugins", "Custom CSS"],
    path: "/contact"
  },
  {
    id: "06",
    icon: RefreshCw,
    title: "Website Redesign & Modernization",
    shortDesc: "Your old website is hurting your brand. Let's rebuild it to reflect the quality of your business.",
    fullDesc: "An outdated website tells customers you're behind the times. I redesign websites to look modern, load faster, and actually convert visitors. We keep what works, fix what doesn't, and give your online presence a professional upgrade that matches the quality of your business.",
    features: [
      "Full design overhaul with modern aesthetics",
      "Improved page speed and mobile experience",
      "Better content structure and navigation",
      "No disruption to existing SEO rankings"
    ],
    businessBenefit: "Look as professional online as you are in person.",
    idealFor: "Businesses with outdated websites losing customers",
    tools: ["WordPress", "React", "Figma"],
    path: "/contact"
  },
  {
    id: "07",
    icon: Zap,
    title: "Website Speed & Performance Optimization",
    shortDesc: "If your website takes more than 3 seconds to load, you're losing customers. Let's fix that.",
    fullDesc: "Slow websites lose visitors before they even see your offer. I audit and optimize your website for speed — compressing images, cleaning up code, and implementing caching — so your site loads fast, ranks better on Google, and gives visitors a smooth experience from the first click.",
    features: [
      "Full performance audit and report",
      "Image compression and lazy loading",
      "Browser caching and CDN setup",
      "Core Web Vitals improvement for SEO"
    ],
    businessBenefit: "Faster website = better Google ranking = more visitors.",
    idealFor: "Any business with a slow or underperforming website",
    tools: ["WordPress", "Cloudflare", "Core Web Vitals"],
    path: "/contact"
  },
  {
    id: "08",
    icon: Wrench,
    title: "Website Maintenance & Ongoing Support",
    shortDesc: "Your website needs regular care to stay secure, updated, and working properly. I take care of all of it.",
    fullDesc: "Websites break. Plugins go out of date. Content needs updating. Security threats happen. With a monthly maintenance plan, I handle all of it so you don't have to worry. You focus on running your business — I keep your website healthy, secure, and up to date.",
    features: [
      "Monthly plugin and security updates",
      "Regular backups so you never lose data",
      "Content updates whenever you need them",
      "Priority support when something breaks"
    ],
    businessBenefit: "Zero downtime, zero stress, zero technical headaches.",
    idealFor: "Any business that wants reliable, hands-free website management",
    tools: ["WordPress", "WooCommerce", "cPanel"],
    path: "/contact"
  }
];
