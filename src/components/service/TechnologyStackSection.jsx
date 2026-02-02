// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function TechnologyStackSection() {
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
        className="relative p-6 rounded-xl bg-linear-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer text-center group"
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
          <p className="text-xs text-gray-500">{tech.category}</p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}
