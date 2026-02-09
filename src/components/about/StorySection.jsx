// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function StorySection() {
  const stats = [
    { value: 50, label: 'Projects Completed', suffix: '+' },
    { value: 100, label: 'Happy Clients', suffix: '+' },
    { value: 2, label: 'Years of Excellence', suffix: '+' },
    { value: 15, label: 'Team Members', suffix: '' }
  ];

  const storyImages = [
    {
      src: "/assets/gallery/img10.jpeg",
      alt: "Team collaboration",
      marginTop: true
    },
    {
      src: "/assets/gallery/img11.jpeg",
      alt: "Modern workspace",
      marginTop: true
    },
    {
      src: "/assets/gallery/img15.jpeg",
      alt: "Modern workspace",
      marginTop: true
    },
    {
      src: "/assets/gallery/img13.jpeg",
      alt: "Modern workspace",
      marginTop: true
    }
  ];

  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [statsAnimated]);

  return (
    <section className="relative py-20 md:py-32 px-6 bg-linear-to-b from-white to-blue-50">
      {/* Professional geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.1)_75%)] bg-size-[60px_60px]"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-300/40 rotate-45 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-purple-300/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-linear-to-br from-blue-200/30 to-purple-200/30 rotate-12 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Content */}
          <div>
            <ScrollAnimationWrapper animation="slide-left">
              <p className="text-blue-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6">
                Our Story
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-[1.2] text-gray-900">
                Building Tomorrow's Solutions{' '}
                <span className="gradient-text">Today</span>
              </h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={200}>
              <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the digital landscape, Briskode Technology 
                  has grown from a small startup to a trusted partner for businesses worldwide. Our 
                  journey began with a simple belief: technology should empower, not complicate.
                </p>
                <p>
                  Today, we combine creative thinking with technical expertise to deliver solutions 
                  that don't just meet expectations—they exceed them. From startups to enterprises, 
                  we've helped countless organizations transform their digital presence and achieve 
                  measurable results.
                </p>
                <p>
                  Our commitment to excellence, innovation, and client success has earned us recognition 
                  as a leading IT solutions provider. But more importantly, it's earned us the trust of 
                  our clients who rely on us to bring their vision to life.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Right: Image Grid */}
          <div className="relative">
            <ScrollAnimationWrapper animation="fade-up" delay={300}>
              <div className="grid grid-cols-2 gap-4">
                {storyImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`relative h-64 rounded-lg overflow-hidden group ${image.marginTop ? 'mt-8' : ''}`}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Stats */}
        <ScrollAnimationWrapper animation="fade-up" delay={400}>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-gray-800 pt-16">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} animate={statsAnimated} />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

function StatCard({ stat, animate }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (animate && !hasAnimated) {
      setHasAnimated(true);
      animateCount();
    }
  }, [animate, hasAnimated]);

  const animateCount = () => {
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <div className="text-center group cursor-default">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text mb-3 transition-all duration-300 group-hover:scale-110">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-700 text-sm md:text-base font-bold uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}
