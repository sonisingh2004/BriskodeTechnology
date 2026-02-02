// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

export default function HomeAbout() {
  const stats = [
    { value: 50, label: 'Projects', suffix: '+' },
    { value: 100, label: 'Happy Clients', suffix: '+' },
    { value: 2, label: 'Years Experience', suffix: '+' },
    { value: 10, label: 'Awards', suffix: '+' }
  ];

  const images = [
    {
      url: '/assets/gallery/img1.jpeg',
      alt: 'Team collaboration at Briskode',  
      gradient: 'from-blue-600/60 via-blue-600/20',
      span: ''
    },
    {
      url: '/assets/gallery/img2.jpeg',
      alt: 'Modern workspace at Briskode', 
      gradient: 'from-purple-600/60 via-purple-600/20',
      span: ''
    },
    {
      url: '/assets/gallery/img3.jpeg',
      alt: 'Innovation at Briskode',   
      gradient: 'from-cyan-600/60 via-cyan-600/20',
      span: ''
    },
    {
      url: '/assets/gallery/img4.jpeg',
      alt: 'Creative workspace at Briskode',  
      gradient: 'from-pink-600/60 via-pink-600/20',
      span: ''
    }
  ];

  return (
    <section className="relative py-20 md:py-22 px-6 overflow-hidden bg-[#010a24]">
      <div className="max-w-7xl mx-auto relative z-10 ">
        {/* Section Label */}
        <ScrollAnimationWrapper animation="slide-left">
          <p className="text-blue-500 text-sm md:text-2xl font-semibold tracking-[0.2em] uppercase mb-8">
          |OUR STORY
          </p>
        </ScrollAnimationWrapper>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left: Text Content */}
          <div>
            <ScrollAnimationWrapper animation="fade-up" delay={100}>
              <AnimatedHeading />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={200}>
              <AnimatedParagraphs />
            </ScrollAnimationWrapper>
          </div>

          {/* Right: Image Grid */}
          <div>
            <ScrollAnimationWrapper animation="fade-up" delay={300}>
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className={`relative rounded-xl overflow-hidden group ${image.span} ${index === 0 || index === 1 ? 'h-48 md:h-56' : 'h-48 md:h-56'}`}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-linear-to-t ${image.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>                               
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Stats Section */}
        <ScrollAnimationWrapper animation="fade-up" delay={400}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

// Animated Heading Component
function AnimatedHeading() {
  const headingRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const spans = heading.querySelectorAll('.word-span');
          gsap.fromTo(
            spans,
            {
              opacity: 0,
              y: 30,
              rotateX: -90
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out'
            }
          );
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(heading);

    return () => {
      if (heading) observer.unobserve(heading);
    };
  }, [hasAnimated]);

  return (
    <h2 
      ref={headingRef}
      className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-10 leading-[1.2]"
      style={{ perspective: '1000px' }}
    >
      <span className="word-span inline-block text-gradient-blue">Your Vision.</span>{' '}
      <span className="word-span inline-block text-white">Our Expertise.</span>
      <br />
      <span className="word-span inline-block text-gradient-blue">Your Success.</span>
      <br />
      <span className="word-span inline-block text-white">Leads That Dominate.</span>
    </h2>
  );
}

// Animated Paragraphs Component
function AnimatedParagraphs() {
  const paragraphsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = paragraphsRef.current;
    if (!container || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const paragraphs = container.querySelectorAll('.animated-paragraph');
          
          paragraphs.forEach((paragraph, index) => {
            const words = paragraph.textContent.split(' ');
            paragraph.innerHTML = words
              .map(word => `<span class="inline-block word-reveal" style="opacity: 0;">${word}</span>`)
              .join(' ');

            const wordSpans = paragraph.querySelectorAll('.word-reveal');
            gsap.to(wordSpans, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.03,
              delay: index * 0.3,
              ease: 'power2.out'
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [hasAnimated]);

  return (
    <div ref={paragraphsRef} className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
      <p className="animated-paragraph">
        At Briskode Technology Pvt. Ltd., we are a team of passionate innovators and 
        technology enthusiasts dedicated to crafting cutting-edge IT solutions that drive 
        growth and success. Established with the vision to empower businesses through 
        transformative digital experiences, we specialize in delivering customized software 
        development, web and mobile applications, cloud solutions, and IT consulting services.
      </p>
      
      <p className="animated-paragraph">
        We help brands stand out in a noisy digital world. From high-converting designs to 
        performance-driven code, our solutions are crafted to attract, engage, and convert 
        users effortlessly.
      </p>
    </div>
  );
}

function StatCard({ stat, index }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

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
    <div
      ref={cardRef}
      className="group"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-blue mb-2 transition-all duration-300">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}
