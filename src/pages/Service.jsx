// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

export default function Service() {
  return (
    <div className="bg-[#00061A] min-h-screen">
      <HeroSection />
      <ServicesGridSection />
      <ProcessSection />
      <TechnologyStackSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden bg-gradient-to-b from-black/90 to-[#00061A]/95" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/8 rounded-full blur-3xl bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-72 h-72 bg-cyan-500/6 rounded-full blur-2xl top-1/2 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
            Our Services
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            <span className="text-white">Comprehensive IT Solutions</span>
            <br />
            <span className="text-gradient-blue">For Modern Businesses</span>
          </h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={200}>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From strategy to implementation, we deliver end-to-end technology services 
            that transform businesses and drive measurable results.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

// Services Grid Section
function ServicesGridSection() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Performance Tuning"],
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "blue"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android devices.",
      features: ["iOS & Android", "React Native", "Cloud Integration", "Push Notifications"],
      iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      color: "purple"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to power your business operations with reliability and security.",
      features: ["AWS & Azure", "DevOps", "Auto Scaling", "Load Balancing"],
      iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
      color: "cyan"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to captivate users and drive engagement with your brand.",
      features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
      iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "pink"
    },
    {
      title: "IT Consulting",
      description: "Expert guidance and strategic planning to help your business leverage technology for growth and innovation.",
      features: ["Strategy Planning", "Tech Stack", "Digital Transformation", "Architecture Design"],
      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      color: "green"
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your unique business needs with cutting-edge technologies.",
      features: ["Enterprise Apps", "API Development", "Microservices", "Legacy Modernization"],
      iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      color: "orange"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient-blue">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
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
        className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-500 group cursor-pointer overflow-hidden"
      >
        {/* Hover glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon */}
          <div
            ref={iconRef}
            className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
          >
            <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
            </svg>
          </div>
          
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-gradient-blue transition-all duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            {service.description}
          </p>
          
          {/* Features */}
          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-xs md:text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-blue-500/0 group-hover:bg-blue-500 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We dive deep into your business needs, goals, and challenges to create a comprehensive roadmap.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      number: "02",
      title: "Design & Prototype",
      description: "Our design team crafts intuitive interfaces and user experiences that align with your brand.",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      number: "03",
      title: "Development",
      description: "Our expert developers bring designs to life with clean, scalable, and maintainable code.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      number: "05",
      title: "Deployment",
      description: "We handle the launch process, ensuring smooth deployment and minimal downtime.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Ongoing support and updates to keep your solution running at peak performance.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              How We <span className="text-gradient-blue">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results every time.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }) {
  const stepRef = useRef(null);

  useEffect(() => {
    const element = stepRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element.querySelector('.step-icon'), {
        scale: 1.1,
        rotate: 10,
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element.querySelector('.step-icon'), {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 50}>
      <div ref={stepRef} className="relative group cursor-default">
        {/* Number Badge */}
        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
          <span className="text-white font-bold text-lg">{step.number}</span>
        </div>

        <div className="relative p-8 pt-12 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="step-icon w-12 h-12 mb-6 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

// Technology Stack Section
function TechnologyStackSection() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Technology Stack
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="text-gradient-blue">Technologies</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We leverage the latest and most powerful technologies to build robust solutions.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyCard({ tech, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
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
    <ScrollAnimationWrapper animation="fade-up" delay={index * 30}>
      <div
        ref={cardRef}
        className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer text-center group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
          <p className="text-xs text-gray-500">{tech.category}</p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the discovery phase."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! All our projects include post-launch support. We offer different support packages ranging from 1 month to 12 months, depending on your needs."
    },
    {
      question: "Can you work with our existing codebase?",
      answer: "Absolutely! We have extensive experience in legacy modernization and can work with your existing code to improve, extend, or completely rebuild it."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile methodology with regular sprints, continuous communication, and iterative development. You'll be involved in every step and receive regular updates."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-gradient-blue">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about our services.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index, isOpen, onClick }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
      }
    }
  }, [isOpen]);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 50}>
      <div className="border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300">
        <button
          onClick={onClick}
          className="w-full p-6 flex items-center justify-between text-left group"
        >
          <h3 className="text-lg font-semibold text-white group-hover:text-gradient-blue transition-all duration-300 pr-4">
            {faq.question}
          </h3>
          <svg
            className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="px-6 pb-6 text-gray-400 leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-black to-[#00061A] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/2 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2]">
            Ready to Start Your
            <br />
            <span className="text-gradient-blue">Next Project?</span>
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation
            </a>
            <a
              href="/about"
              className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
