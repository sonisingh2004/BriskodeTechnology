// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function ValuesSection() {
  const values = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Innovation",
      description: "Embracing new technologies and creative approaches to solve complex challenges."
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Collaboration",
      description: "Working together as a team and with our clients to achieve shared success."
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Reliability",
      description: "Building trust through consistent delivery and unwavering commitment to quality."
    },
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "Creativity",
      description: "Thinking outside the box to create unique solutions that stand out."
    },
    {
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
      title: "Integrity",
      description: "Maintaining transparency and ethical practices in all our interactions."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-linear-to-b from-white to-purple-50">
      {/* Professional grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-size-[80px_80px]"></div>
      </div>
      
      {/* Elegant floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/4 w-28 h-28 border-2 border-blue-300/50 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-linear-to-br from-purple-200/40 to-cyan-200/40 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-16 w-14 h-14 border-2 border-cyan-300/60 rounded-lg animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm md:text-2xl font-bold tracking-[0.2em] uppercase mb-4">
              | Our Core Values
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card.querySelector('.value-icon'), {
        scale: 1.2,
        rotate: 360,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card.querySelector('.value-icon'), {
        scale: 1,
        rotate: 0,
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
        className="relative p-8 rounded-2xl glass-card border border-blue-200 hover:border-blue-400 transition-all duration-500 group cursor-default overflow-hidden hover-lift"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="value-icon w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center border-2 border-blue-200">
            <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
            </svg>
          </div>
          
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-all duration-300">
            {value.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {value.description}
          </p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}
