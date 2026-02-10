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


      {/* ================= CONTENT ================= */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 w-full pt-24 md:pt-32 lg:pt-40 xl:pt-60 pb-20 md:pb-32">

          {/* Centered Content */}
          <div className="max-w-5xl mx-auto text-center">
            <h1
              ref={titleRef}
              className="text-gray-900 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              font-extrabold leading-[1.1] tracking-tight mb-8 md:mb-10"
            >
              <span className="word opacity-0 inline-block">Welcome</span>{" "}
              <span className="word opacity-0 inline-block">to</span>
              <br />
              <span className="word opacity-0 inline-block gradient-text relative inline-flex flex-col items-center">
                Briskode
                <svg className="absolute -bottom-3 left-0 w-full h-5 md:h-6" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 150 2 198 10" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" className="animate-draw"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p
              ref={paraRef}
              className="opacity-0 animate-para text-gray-700
              text-lg sm:text-xl md:text-2xl leading-relaxed
              mb-10 md:mb-12 max-w-4xl mx-auto"
            >
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold mb-5 text-gray-900 tracking-tight">
                Your trusted partner in digital transformation.
              </span>
              <span className="block text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                We deliver cost-effective, internationally standard websites,
                mobile apps, and eCommerce solutions tailored to your business needs.
                With expert team and commitment to excellence, we turn your vision into reality.
              </span>
            </p>

            <div className="opacity-0 animate-para flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <Link to="/about">
                <button className="btn-primary inline-flex items-center gap-2 hover-lift group text-lg px-10 py-5">
                  Learn More 
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-secondary inline-flex items-center gap-2 hover-lift text-lg px-10 py-5">
                  Get Started
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Trust Indicators / Stats */}
            <div className="opacity-0 animate-para grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto pt-8 border-t border-blue-200/50">
              <div className="text-center group cursor-default hover-lift">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">Projects Delivered</div>
              </div>
              <div className="text-center group cursor-default hover-lift">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">Client Satisfaction</div>
              </div>
              <div className="text-center group cursor-default hover-lift">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">Support Available</div>
              </div>
              <div className="text-center group cursor-default hover-lift">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">Years Experience</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
