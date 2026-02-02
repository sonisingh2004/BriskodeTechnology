// @ts-nocheck
import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimationWrapper({
    children,
    animation = 'fade-up',
    delay = 0,
    threshold = 0.1
}) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold,
                rootMargin: '50px'
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, isVisible]);

    const animationClass = {
        'fade-up': 'animate-fade-up',
        'slide-left': 'animate-slide-left',
        'slide-right': 'animate-slide-right',
        'scale-in': 'animate-scale-in'
    }[animation];

    return (
        <div
            ref={elementRef}
            className={`${isVisible ? animationClass : 'opacity-0'}`}
            style={{
                animationDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
}
