// @ts-nocheck
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const titleWords = titleRef.current.querySelectorAll(".word");
    titleWords.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add("animate-word");
      }, index * 150);
    });

    setTimeout(() => {
      paraRef.current.classList.add("animate-para");
    }, titleWords.length * 150 + 200);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans">

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* ================= VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
        {/* Enhanced gradient overlay with animation */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/98 via-white/95 to-purple-50/98 z-5" />
        <div className="absolute inset-0 gradient-mesh z-5 animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-10 w-full pt-24 pb-20 md:pb-32 md:py-40">

          <div className="grid md:grid-cols-12 gap-8 md:gap-16 md:items-center mb-12 md:mb-0">

            {/* LEFT */}
            <div className="md:col-span-7">
              {/* Badge */}
              <div className="opacity-0 animate-para inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-blue-700 text-xs md:text-sm font-semibold">Building Digital Excellence Since 2024</span>
              </div>

              <h1
                ref={titleRef}
                className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-extrabold leading-tight tracking-tight mb-6 md:mb-8"
              >
                <span className="word opacity-0 inline-block">Welcome</span>{" "}
                <span className="word opacity-0 inline-block">to</span>
                <br className="hidden sm:block" />
                <span className="word opacity-0 inline-block gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl relative">
                  Briskode
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 2 150 2 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p
                ref={paraRef}
                className="opacity-0 animate-para text-gray-700
                text-base sm:text-lg md:text-xl leading-relaxed
                mb-8 md:mb-10"
              >
                <span className="block text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-900">
                  Your trusted partner in digital transformation.
                </span>
                <span className="block text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  We deliver cost-effective, internationally standard websites,
                  mobile apps, and eCommerce solutions tailored to your business needs.
                  With expert team and commitment to excellence, we turn your vision into reality.
                </span>
              </p>

              <div className="opacity-0 animate-para flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <button className="btn-primary inline-flex items-center gap-2 hover-lift group">
                    Learn More 
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn-secondary inline-flex items-center gap-2 hover-lift">
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT - Interactive Visual Card */}
            <div className="md:col-span-5 flex justify-center items-center mt-8 md:mt-0 relative">
              {/* Decorative animated rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-70 h-70 sm:w-87.5 sm:h-87.5 md:w-105 md:h-105 border-2 border-blue-300/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-62.5 h-62.5 sm:w-[320px] sm:h-80 md:w-95 md:h-95 border-2 border-purple-300/20 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
              </div>

              {/* Main Visual Card */}
              <div className="relative w-full max-w-70 sm:max-w-85 md:max-w-95 lg:max-w-105 z-10">
                
                {/* Top Card - Video */}
                <div className="relative h-56 sm:h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white glass-card opacity-0 animate-para hover-lift transition-all duration-500 group">
                  {/* Video Background */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover opacity-80"
                    >
                      <source src="/assets/company.mp4" type="video/mp4" />
                    </video>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
