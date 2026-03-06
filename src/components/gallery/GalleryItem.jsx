// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function GalleryItem({ image, index, onClick }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseEnter = () => {
      gsap.to(item.querySelector('.gallery-image'), {
        scale: 1.1,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(item.querySelector('.gallery-overlay'), {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(item.querySelector('.gallery-image'), {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
      gsap.to(item.querySelector('.gallery-overlay'), {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 50}>
      <div
        ref={itemRef}
        onClick={onClick}
        className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square"
      >
        <img
          src={image.url}
          alt={image.title}
          className="gallery-image w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="gallery-overlay absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-0 flex flex-col justify-end p-6 transition-opacity duration-300">
          <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">
            {image.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
          <p className="text-gray-300 text-sm">{image.description}</p>
          
          {/* Zoom Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}
