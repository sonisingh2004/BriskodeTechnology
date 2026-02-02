// @ts-nocheck
import gsap from 'gsap';
import { useRef } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function Choose() {
  const reasons = [
    {
      title: "Expert Team",
      description: "Our seasoned professionals bring years of industry experience and cutting-edge technical expertise to every project.",
      iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered 50+ projects across diverse industries with a 100% client satisfaction rate.",
      iconPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    },
    {
      title: "Agile Methodology",
      description: "Flexible, iterative approach ensuring rapid delivery, continuous improvement, and transparent communication.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies and frameworks to build scalable, future-proof solutions.",
      iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    },
    {
      title: "Cost-Effective Solutions",
      description: "Competitive pricing without compromising quality. We deliver maximum value for your investment.",
      iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly at all times.",
      iconPath: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden  bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-blue-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Your Success is Our Priority
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              We combine technical excellence, industry expertise, and unwavering commitment 
              to deliver solutions that drive real business results.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ScrollAnimationWrapper
              key={reason.title}
              animation="fade-up"
              delay={index * 100}
            >
              <ReasonCard reason={reason} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        y: -4,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon */}
      <div ref={iconRef} className="mb-6">
        <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
          <svg 
            className="w-6 h-6 text-blue-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={reason.iconPath} 
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
        {reason.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">
        {reason.description}
      </p>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
}
