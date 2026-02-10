// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function TeamCultureSection() {
  const cultures = [
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Collaborative Environment",
      description: "We believe in the power of teamwork and open communication."
    },
    {
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Fun & Celebrations",
      description: "Regular team events, parties, and celebrations to maintain work-life balance."
    },
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Learning & Growth",
      description: "Continuous learning opportunities through workshops and training sessions."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Innovation First",
      description: "Encouraging creativity and out-of-the-box thinking in everything we do."
    },
    {
      icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",
      title: "Recognition & Rewards",
      description: "Celebrating achievements and recognizing outstanding contributions."
    },
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      title: "Wellness Focus",
      description: "Prioritizing mental and physical health with flexible work arrangements."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-linear-to-b from-blue-50 to-purple-50">
      {/* Professional grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-size-[80px_80px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm md:text-2xl font-bold tracking-[0.2em] uppercase mb-4">
              | Our Culture
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              What Makes Us <span className="gradient-text">Special</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Our culture is built on collaboration, innovation, and a genuine passion for creating exceptional experiences.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cultures.map((culture, index) => (
            <CultureCard key={index} culture={culture} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CultureCard({ culture, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card.querySelector('.culture-icon'), {
        scale: 1.15,
        rotate: 10,
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card.querySelector('.culture-icon'), {
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
          <div className="culture-icon w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center border-2 border-blue-200 group-hover:border-blue-400 transition-colors duration-300">
            <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={culture.icon} />
            </svg>
          </div>
          
          <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-all duration-300">
            {culture.title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed font-medium">            {culture.description}
          </p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}
