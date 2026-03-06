// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedParagraphs() {
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
