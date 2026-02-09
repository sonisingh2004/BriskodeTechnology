// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function TeamSection() {
  const team = [
    {
      name: "Biswajit Matia",
      role: "CEO",
      image: "/assets/ceo.jpg",
    },
    {
      name: "Mayuresh Mohanty",
      role: "Director",
      image: "/assets/director.jpg",
    },
    {
      name: "Prajukta Mahakud",
      role: "HR",
      image: "/assets/hr.jpg",
    },
    {
      name: "Sameer Kumar Sahu",
      role: "Frontend Developer",
      image: "/assets/fd.jpeg",
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-linear-to-b from-purple-50 to-blue-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-20 left-10 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-200/25 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
              Meet Our Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              The Minds Behind <span className="gradient-text">Briskode</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience and a passion for excellence.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({ member, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(card.querySelector('.team-image'), {
        x: (x - rect.width / 2) * 0.1,
        y: (y - rect.height / 2) * 0.1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card.querySelector('.team-image'), {
        x: 0,
        y: 0,
        duration: 0.5
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 100}>
      <div
        ref={cardRef}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-2xl mb-4 border-2 border-blue-200 hover:border-blue-400 transition-colors duration-500">
          <div className="team-image relative aspect-square">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-600/80 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-extrabold text-gray-900 mb-1 group-hover:text-blue-600 transition-all duration-300">
          {member.name}
        </h3>
        <p className="text-blue-600 text-sm font-bold mb-2">{member.role}</p>
      </div>
    </ScrollAnimationWrapper>
  );
}
