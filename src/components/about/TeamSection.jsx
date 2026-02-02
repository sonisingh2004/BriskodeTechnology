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
    <section className="relative py-20 md:py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Meet Our Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              The Minds Behind <span className="text-gradient-blue">Briskode</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
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
        <div className="relative overflow-hidden rounded-2xl mb-4">
          <div className="team-image relative aspect-square">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-600/80 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gradient-blue transition-all duration-300">
          {member.name}
        </h3>
        <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm">{member.bio}</p>
      </div>
    </ScrollAnimationWrapper>
  );
}
