// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    {
      id: 1,
      url: '/assets/gallery/img1.jpeg',
    },
    {
      id: 2,
      url: '/assets/gallery/img5.jpeg',
    },
    {
      id: 3,
      url: '/assets/gallery/img3.jpeg',
    },
    {
      id: 4,
      url: '/assets/gallery/img4.jpeg',
    },
    {
      id: 5,
      url: '/assets/gallery/img6.jpeg',
    },
    {
      id: 6,
      url: '/assets/gallery/img7.jpeg',
    },
    {
      id: 7,
      url: '/assets/gallery/img8.jpeg',
    },
    {
      id: 8,
      url: '/assets/gallery/img9.jpeg',
    },
    {
      id: 9,
      url: '/assets/gallery/img10.jpeg',
    },
    {
      id: 10,
      url: '/assets/gallery/img11.jpeg',
    },
    {
      id: 11,
      url: '/assets/gallery/img12.jpeg',
    },
    {
      id: 12,
      url: '/assets/gallery/img13.jpeg',
    },
    {
      id: 13,
      url: '/assets/gallery/img14.jpeg',
    },
    {
      id: 14,
      url: '/assets/gallery/img15.jpeg',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-32 left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-200/25 rounded-full blur-3xl bottom-32 right-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm md:text-2xl font-bold tracking-[0.2em] uppercase mb-4">
              | Our Moments
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Life at <span className="gradient-text">Briskode</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
              From collaborative work sessions to fun celebrations, explore the moments that define our culture.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryItem 
              key={image.id} 
              image={image} 
              index={index}
              onClick={() => setLightboxImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <Lightbox 
          image={lightboxImage} 
          onClose={() => setLightboxImage(null)}
          images={images}
          onNavigate={(direction) => {
            const currentIndex = images.findIndex(img => img.id === lightboxImage.id);
            const newIndex = direction === 'next' 
              ? (currentIndex + 1) % images.length 
              : (currentIndex - 1 + images.length) % images.length;
            setLightboxImage(images[newIndex]);
          }}
        />
      )}
    </section>
  );
}

function GalleryItem({ image, index, onClick }) {
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
        className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
      >
        <img
          src={image.url}
          alt={image.title}
          className="gallery-image w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/40 to-transparent opacity-0 flex flex-col justify-end p-6 transition-opacity duration-300">
          <span className="text-xs text-blue-100 font-bold uppercase tracking-wider mb-2">
            {image.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
          <p className="text-blue-50 text-sm font-medium">{image.description}</p>
          
          {/* Zoom Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

function Lightbox({ image, onClose, onNavigate }) {
  const lightboxRef = useRef(null);

  useEffect(() => {
    // Animate in
    if (lightboxRef.current) {
      gsap.fromTo(
        lightboxRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }

    // Close on ESC key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        ref={lightboxRef}
        className="relative max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => onNavigate('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>

        {/* Info */}
        <div className="mt-6 text-center">
          <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            {image.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
          <p className="text-gray-400">{image.description}</p>
        </div>
      </div>
    </div>
  );
}
