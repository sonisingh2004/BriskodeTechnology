// @ts-nocheck
import { useState } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import GalleryItem from './GalleryItem';
import Lightbox from './Lightbox';

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

  const handleNavigate = (direction) => {
    const currentIndex = images.findIndex(img => img.id === lightboxImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setLightboxImage(images[newIndex]);
  };

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Our Moments
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Life at <span className="text-gradient-blue">Briskode</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
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
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
}
