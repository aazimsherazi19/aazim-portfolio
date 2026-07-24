import { 
  Layout, 
  Code2, 
  LayoutDashboard, 
  ShoppingBag, 
  Palette, 
  Sparkles 
} from 'lucide-react';

export const servicesData = [
  {
    id: "01",
    icon: Layout,
    title: "UI/UX & Product Design",
    shortDesc: "User-centered interface designs crafted with research, wireframing, high-fidelity prototypes, and scalable design systems.",
    fullDesc: "I build intuitive, conversion-focused user interfaces for web and mobile applications. Every pixel is planned with user behavior, accessibility, and visual hierarchy in mind.",
    features: [
      "User Research & Wireframing",
      "High-Fidelity Interactive Prototypes",
      "Comprehensive Design Systems",
      "Mobile-First Responsive Layouts"
    ],
    tools: ["Figma", "Design Systems", "Prototyping"],
    path: "/contact"
  },
  {
    id: "02",
    icon: Code2,
    title: "Custom Web Development",
    shortDesc: "Ultra-fast, responsive web applications built with modern frontend frameworks, optimized for speed and SEO.",
    fullDesc: "Transforming design mockups into pixel-perfect, lightning-fast web experiences using React, Next.js, and Tailwind CSS with clean code architecture.",
    features: [
      "Pixel-Perfect Component Architecture",
      "SEO & Core Web Vitals Optimization",
      "API Integrations & Dynamic Data",
      "Cross-Browser & Mobile Compatibility"
    ],
    tools: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    path: "/contact"
  },
  {
    id: "03",
    icon: LayoutDashboard,
    title: "SaaS & Admin Dashboards",
    shortDesc: "Data-dense analytics dashboards and management portals designed for complex workflows and dark mode themes.",
    fullDesc: "Specialized dashboard UI/UX engineering that simplifies complex data sets into actionable insights with clean data visualization and seamless navigation.",
    features: [
      "Real-Time Data Visualization & Charts",
      "Custom Widget & Metrics Builders",
      "Dark Mode & Light Mode Theme Support",
      "Role-Based Navigation & Workflows"
    ],
    tools: ["Recharts", "Tailwind CSS", "React Hook Form"],
    path: "/contact"
  },
  {
    id: "04",
    icon: ShoppingBag,
    title: "E-Commerce & Digital Stores",
    shortDesc: "High-converting online stores featuring seamless product discovery, dynamic filtering, and optimized checkout funnels.",
    fullDesc: "Building modern e-commerce experiences tailored to drive sales, improve cart retention, and deliver memorable brand interactions.",
    features: [
      "Conversion-Driven Product Pages",
      "Custom Filtering & Live Search",
      "Mobile Optimized Checkout Flow",
      "Fast Page Load Speeds"
    ],
    tools: ["React", "Redux Toolkit", "Stripe Integration"],
    path: "/contact"
  },
  {
    id: "05",
    icon: Palette,
    title: "Brand & Visual Identity",
    shortDesc: "Distinctive brand identities, typography guidelines, color palettes, and digital asset kits that make your brand stand out.",
    fullDesc: "Establishing memorable brand foundations that resonate with your target audience across web, social media, and digital touchpoints.",
    features: [
      "Logo Design & Brand Guidelines",
      "Tailored Color & Typography Systems",
      "Social Media & Digital Assets",
      "Vector Illustrations & Icons"
    ],
    tools: ["Figma", "Illustrator", "Brand Strategy"],
    path: "/contact"
  },
  {
    id: "06",
    icon: Sparkles,
    title: "Interactive Motion & Animations",
    shortDesc: "Fluid micro-interactions, scroll-driven animations, and page transitions that make web applications feel alive.",
    fullDesc: "Adding delight and engaging micro-animations using Framer Motion and Lenis smooth scroll without sacrificing load performance.",
    features: [
      "Framer Motion Physics & Page Transitions",
      "Scroll-Triggered Micro-Interactions",
      "Interactive Hover & Cursor Effects",
      "Performance-Optimized CSS Animations"
    ],
    tools: ["Framer Motion", "Lenis Scroll", "CSS3 Animation"],
    path: "/contact"
  }
];
