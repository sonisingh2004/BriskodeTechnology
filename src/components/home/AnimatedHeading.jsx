// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedHeading() {
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
