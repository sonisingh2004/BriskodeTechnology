// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function ProcessSection() {
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
    <section className="relative py-20 md:py-32 px-6 bg-linear-to-b from-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-20 left-10 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-200/25 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
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
        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
          <span className="text-white font-extrabold text-lg">{step.number}</span>
        </div>

        <div className="relative p-8 pt-12 rounded-2xl glass-card border border-blue-200 group-hover:border-blue-400 transition-all duration-500 overflow-hidden hover-lift">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="step-icon w-12 h-12 mb-6 rounded-lg bg-blue-100 border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-400 transition-colors duration-300">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-600 transition-all duration-300">{step.title}</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}
