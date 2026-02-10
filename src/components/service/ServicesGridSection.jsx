// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function ServicesGridSection() {
  const [activeCategory, setActiveCategory] = useState('Development');

  const categories = [
    { name: 'Development', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { name: 'Design & Branding', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
    { name: 'Digital Marketing', icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z' },
    { name: 'Business Solutions', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Industry Solutions', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' }
  ];

  const servicesByCategory = {
    'Development': [
      {
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies for optimal performance, scalability, and user experience.",
        features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Performance Tuning"],
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.",
        features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
        iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      },
      {
        title: "Software Development",
        description: "Custom software solutions tailored to your business needs with scalable architecture and cutting-edge technologies.",
        features: ["Enterprise Software", "API Development", "Microservices", "Cloud-Native Apps"],
        iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      },
      {
        title: "WordPress Development",
        description: "Professional WordPress websites with custom themes, plugins, and optimized performance for easy content management.",
        features: ["Custom Themes", "Plugin Development", "WooCommerce", "Speed Optimization"],
        iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      },
      {
        title: "Shopify Development",
        description: "Complete Shopify store setup and customization with seamless payment integration and inventory management.",
        features: ["Store Setup", "Theme Customization", "App Integration", "Payment Gateway"],
        iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      },
      {
        title: "E-Commerce Solutions",
        description: "Full-featured online shopping platforms with secure checkout, inventory management, and analytics.",
        features: ["Shopping Cart", "Payment Integration", "Order Management", "Multi-vendor Support"],
        iconPath: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      }
    ],
    'Design & Branding': [
      {
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces designed to captivate users and drive engagement with data-driven design decisions.",
        features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
        iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      },
      {
        title: "Branding Design",
        description: "Comprehensive brand identity creation including logo design, brand guidelines, and visual assets for consistent brand presence.",
        features: ["Logo Design", "Brand Guidelines", "Business Cards", "Marketing Materials"],
        iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      }
    ],
    'Digital Marketing': [
      {
        title: "SEO Services",
        description: "Comprehensive search engine optimization to improve your website's visibility and drive organic traffic from search engines.",
        features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"],
        iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      },
      {
        title: "Digital Marketing",
        description: "Full-service digital marketing strategies including social media, content marketing, and multi-channel campaigns.",
        features: ["Social Media Marketing", "Content Strategy", "Campaign Management", "Brand Awareness"],
        iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
      },
      {
        title: "PPC Management",
        description: "Expert pay-per-click advertising campaigns on Google Ads, Facebook, and other platforms for maximum ROI.",
        features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "A/B Testing"],
        iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Email Marketing",
        description: "Strategic email campaigns that nurture leads, engage customers, and drive conversions with personalized content.",
        features: ["Campaign Design", "Automation", "List Management", "Analytics"],
        iconPath: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      },
      {
        title: "Content Marketing & Blogging",
        description: "Engaging content creation and blog management to establish thought leadership and attract your target audience.",
        features: ["Blog Writing", "Content Strategy", "SEO Content", "Editorial Calendar"],
        iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      },
      {
        title: "Reputation Management",
        description: "Monitor and manage your online reputation with review management, crisis response, and brand protection strategies.",
        features: ["Review Monitoring", "Response Management", "Brand Protection", "Crisis Management"],
        iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      },
      {
        title: "Analytics & Tracking",
        description: "Comprehensive analytics setup and reporting to track performance, understand user behavior, and make data-driven decisions.",
        features: ["Google Analytics", "Custom Dashboards", "Conversion Tracking", "Performance Reports"],
        iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      }
    ],
    'Business Solutions': [
      {
        title: "IT Consulting",
        description: "Expert technology consulting and strategic planning to help your business leverage technology for growth and digital transformation.",
        features: ["Tech Strategy", "System Architecture", "Digital Transformation", "Technology Roadmap"],
        iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      },
      {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure setup and management on AWS, Azure, or Google Cloud for reliable business operations.",
        features: ["Cloud Migration", "Infrastructure Setup", "Auto Scaling", "Security & Compliance"],
        iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      },
      {
        title: "Public Relations (PR)",
        description: "Strategic public relations services to build brand reputation, media relationships, and manage corporate communications.",
        features: ["Media Relations", "Press Releases", "Crisis Communication", "Brand Storytelling"],
        iconPath: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
      }
    ],
    'Industry Solutions': [
      {
        title: "Real Estate Solutions",
        description: "Complete digital solutions for real estate businesses including property listings, virtual tours, and lead management systems.",
        features: ["Property Listings", "IDX Integration", "Virtual Tours", "CRM Integration"],
        iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      },
      {
        title: "Construction Solutions",
        description: "Specialized websites and management tools for construction companies with project showcases and client portals.",
        features: ["Project Galleries", "Quote Systems", "Client Portals", "Equipment Management"],
        iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      },
      {
        title: "Cleaning Services Solutions",
        description: "Online booking systems and marketing websites for cleaning service businesses with scheduling and payment integration.",
        features: ["Online Booking", "Service Packages", "Scheduling System", "Customer Reviews"],
        iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      },
      {
        title: "Automotive Solutions",
        description: "Comprehensive digital solutions for automotive businesses including inventory management, booking systems, and customer portals.",
        features: ["Inventory Showcase", "Appointment Booking", "Service Management", "Customer Portal"],
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
      }
    ]
  };

  const activeServices = servicesByCategory[activeCategory];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-linear-to-b from-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-32 left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-200/25 rounded-full blur-3xl bottom-32 right-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm md:text-2xl font-bold tracking-[0.2em] uppercase mb-4">
              | What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
              Comprehensive technology solutions designed to accelerate your business growth.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Category Tabs */}
        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`group px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 hover-lift ${
                  activeCategory === category.name
                    ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                    : 'glass-card border-blue-200 text-gray-700 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                </svg>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activeServices.map((service, index) => (
            <ServiceCard key={`${activeCategory}-${index}`} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;
    if (!card || !icon) return;

    const handleMouseEnter = () => {
      gsap.to(icon, {
        scale: 1.1,
        rotate: 5,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(card, {
        y: -8,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(card, {
        y: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 50}>
      <div
        ref={cardRef}
        className="relative p-8 rounded-2xl glass-card border border-blue-200 hover:border-blue-400 transition-all duration-500 group cursor-pointer overflow-hidden hover-lift"
      >
        {/* Hover glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon */}
          <div
            ref={iconRef}
            className="w-16 h-16 mb-6 rounded-xl bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center border-2 border-blue-200 group-hover:border-blue-400 transition-colors duration-300"
          >
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
            </svg>
          </div>
          
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-600 transition-all duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            {service.description}
          </p>
          
          {/* Features */}
          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-xs md:text-sm text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}
