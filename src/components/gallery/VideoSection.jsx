// @ts-nocheck
import { useRef, useState } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function VideoSection() {
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
    <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-purple-50 to-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-200/30 rounded-full blur-3xl top-32 left-1/4 animate-float"></div>
        <div className="absolute w-72 h-72 bg-purple-200/25 rounded-full blur-3xl bottom-32 right-1/4 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
              Behind The Scenes
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              A Day at <span className="gradient-text">Briskode</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Experience the energy, passion, and creativity that drives our team every single day.
            </p>
            {videoError && (
              <p className="text-red-600 text-sm mt-4 font-medium">
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
                  className="w-20 h-20 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300"
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
