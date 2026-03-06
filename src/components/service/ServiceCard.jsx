// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function ServiceCard({ service, index }) {
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
        className="relative p-8 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-500 group cursor-pointer overflow-hidden"
      >
        {/* Hover glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Icon */}
          <div
            ref={iconRef}
            className="w-16 h-16 mb-6 rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
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
