// @ts-nocheck
import gsap from 'gsap';
import { useRef } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function HomeServices() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized"],
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android devices.",
      features: ["iOS & Android", "React Native", "Cloud Integration"],
      iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your business operations with reliability and security.",
      features: ["AWS & Azure", "DevOps", "Auto Scaling"],
      iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to captivate users and drive engagement with your brand.",
      features: ["User Research", "Prototyping", "Design Systems"],
      iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      title: "IT Consulting",
      description: "Expert guidance and strategic planning to help your business leverage technology for growth and innovation.",
      features: ["Strategy Planning", "Tech Stack", "Digital Transformation"],
      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your unique business needs with cutting-edge technologies.",
      features: ["Enterprise Apps", "API Development", "Microservices"],
      iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden bg-linear-to-b from-blue-50 to-white">
      {/* Professional grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-size-[80px_80px]"></div>
      </div>
      
      {/* Elegant floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/4 w-28 h-28 border border-blue-300/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-linear-to-br from-blue-200/20 to-cyan-200/20 rotate-45 animate-float"></div>
        <div className="absolute top-1/2 right-16 w-14 h-14 border-2 border-cyan-300/30 rounded-lg animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-blue-600 text-xs md:text-xl font-bold tracking-[0.2em] uppercase mb-4">
              |OUR SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Comprehensive IT Solutions
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              From strategy to implementation, we deliver end-to-end technology services 
              that transform businesses and drive measurable results.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper
              key={service.title}
              animation="fade-up"
              delay={index * 100}
            >
              <ServiceCard service={service} index={index} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -2,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative glass-card rounded-xl p-8 group cursor-pointer transition-all duration-300 hover-lift border border-blue-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon */}
      <div 
        ref={iconRef}
        className="mb-6"
      >
        <svg 
          className="w-10 h-10 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d={service.iconPath} 
          />
        </svg>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-gray-900">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features List */}
      <div className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <div 
            key={idx} 
            className="flex items-center text-xs text-gray-700 font-medium"
          >
            <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Arrow Icon */}
      <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-blue-600">
        <svg 
          className="w-4 h-4 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </div>
    </div>
  );
}
