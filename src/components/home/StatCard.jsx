// @ts-nocheck
import { useEffect, useRef, useState } from 'react';

export default function StatCard({ stat, index }) {
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
