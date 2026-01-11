// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

export default function AnimatedStats() {
    const stats = [
        { label: 'Happy Clients', value: 150, suffix: '+' },
        { label: 'Projects Completed', value: 500, suffix: '+' },
        { label: 'Years Experience', value: 10, suffix: '+' },
        { label: 'Team Members', value: 25, suffix: '+' }
    ];

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 gradient-radial opacity-50"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollAnimationWrapper animation="fade-up">
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 gradient-text">
                        Trusted by Industry Leaders
                    </h2>
                </ScrollAnimationWrapper>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <ScrollAnimationWrapper
                            key={index}
                            animation="scale-in"
                            delay={index * 100}
                        >
                            <StatCard stat={stat} />
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({ stat }) {
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
            { threshold: 0.5 }
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
            className="glass-strong rounded-2xl p-8 text-center hover-lift gradient-border"
        >
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                {count}{stat.suffix}
            </div>
            <div className="text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
            </div>
        </div>
    );
}
