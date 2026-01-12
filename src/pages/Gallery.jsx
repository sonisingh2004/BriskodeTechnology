
// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

export default function Gallery() {
  return (
    <div className="bg-[#00061A] min-h-screen">
      <HeroSection />
      <GallerySection />
      <TeamCultureSection />
      <VideoSection />
      <CTASection />
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden bg-gradient-to-b from-black/90 to-[#00061A]/95" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/8 rounded-full blur-3xl bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-72 h-72 bg-cyan-500/6 rounded-full blur-2xl top-1/2 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
            Gallery
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            <span className="text-white">Capturing Moments</span>
            <br />
            <span className="text-gradient-blue">Building Memories</span>
          </h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={200}>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A glimpse into our journey, our team, and the amazing moments we've shared together 
            while building innovative solutions.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

// Gallery Section with Filters
function GallerySection() {
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

// Lightbox Component
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

// Team Culture Section
function TeamCultureSection() {
  const cultures = [
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Collaborative Environment",
      description: "We believe in the power of teamwork and open communication."
    },
    {
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Fun & Celebrations",
      description: "Regular team events, parties, and celebrations to maintain work-life balance."
    },
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Learning & Growth",
      description: "Continuous learning opportunities through workshops and training sessions."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Innovation First",
      description: "Encouraging creativity and out-of-the-box thinking in everything we do."
    },
    {
      icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",
      title: "Recognition & Rewards",
      description: "Celebrating achievements and recognizing outstanding contributions."
    },
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      title: "Wellness Focus",
      description: "Prioritizing mental and physical health with flexible work arrangements."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Our Culture
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Makes Us <span className="text-gradient-blue">Special</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our culture is built on collaboration, innovation, and a genuine passion for creating exceptional experiences.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cultures.map((culture, index) => (
            <CultureCard key={index} culture={culture} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CultureCard({ culture, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card.querySelector('.culture-icon'), {
        scale: 1.15,
        rotate: 10,
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card.querySelector('.culture-icon'), {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 50}>
      <div
        ref={cardRef}
        className="relative p-8 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-500 group cursor-default overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="culture-icon w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={culture.icon} />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-blue transition-all duration-300">
            {culture.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {culture.description}
          </p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

// Video Section
function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      console.log('Video element:', videoRef.current);
      console.log('Video readyState:', videoRef.current.readyState);
      console.log('Video src:', videoRef.current.currentSrc);
      
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video playing successfully');
              setIsPlaying(true);
            })
            .catch(error => {
              console.error('Video play failed:', error);
              setVideoError(true);
            });
        }
      }
    }
  };

  const handleVideoError = (e) => {
    console.error('Video failed to load:', e);
    console.error('Error details:', videoRef.current?.error);
    setVideoError(true);
  };

  const handleCanPlay = () => {
    console.log('Video can play - ready to start');
  };

  const handleLoadedMetadata = () => {
    console.log('Video metadata loaded');
  };

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Behind The Scenes
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              A Day at <span className="text-gradient-blue">Briskode</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Experience the energy, passion, and creativity that drives our team every single day.
            </p>
            {videoError && (
              <p className="text-red-400 text-sm mt-4">
                Video failed to load. Please check the video file.
              </p>
            )}
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <div className="relative rounded-2xl overflow-hidden aspect-video group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
              onPlay={() => {
                console.log('Video onPlay event triggered');
                setIsPlaying(true);
              }}
              onPause={() => {
                console.log('Video onPause event triggered');
                setIsPlaying(false);
              }}
              onEnded={() => {
                console.log('Video onEnded event triggered');
                setIsPlaying(false);
              }}
              onError={handleVideoError}
              onCanPlay={handleCanPlay}
              onLoadedMetadata={handleLoadedMetadata}
              preload="metadata"
              playsInline
            >
              <source src="/assets/company.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                <button 
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300"
                  aria-label="Play video"
                >
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}

            {/* Pause Button Overlay */}
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={handlePlayPause}
                  className="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
                  aria-label="Pause video"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zM14 4h4v16h-4V4z" />
                  </svg>
                </button>
              </div>
            )}

            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl group-hover:border-blue-500/40 transition-colors duration-300 pointer-events-none"></div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-black to-[#00061A] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/2 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2]">
            Want to Be Part of
            <br />
            <span className="text-gradient-blue">Our Story?</span>
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Join Our Team
            </a>
            <a
              href="/about"
              className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
