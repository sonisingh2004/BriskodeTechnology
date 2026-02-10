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
    <section className="relative min-h-screen w-full overflow-hidden font-sans bg-gradient-to-br from-blue-50 via-cyan-50 to-white">

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-20 left-20 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full top-40 right-32 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-2 h-2 bg-blue-300 rounded-full bottom-32 left-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-3 h-3 bg-cyan-300 rounded-full bottom-20 right-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/25 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.8)_1px,transparent_0)] bg-[length:48px_48px]"></div>
      </div>


      {/* ================= CONTENT ================= */}
      <div className="relative z-20 flex items-center py-20 sm:py-24 md:py-32 lg:min-h-screen lg:py-40">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 w-full">

          {/* Centered Content */}
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}


            <h1
              ref={titleRef}
              className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              font-extrabold leading-[1.2] tracking-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8"
            >
              <span className="word opacity-0 inline-block">Welcome</span>{" "}
              <span className="word opacity-0 inline-block">to</span>
              <br />
              <span className="word opacity-0 inline-block gradient-text relative inline-flex flex-col items-center">
                Briskode
                <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-4 sm:h-5 md:h-6" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 150 2 198 10" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" className="animate-draw"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p
              ref={paraRef}
              className="opacity-0 animate-para text-gray-700
              text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed
              mb-5 sm:mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto"
            >
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold mb-2 sm:mb-3 text-gray-900 tracking-tight">
                Your trusted partner in digital transformation.
              </span>
              <span className="block text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                We deliver cost-effective, internationally standard websites,
                mobile apps, and eCommerce solutions tailored to your business needs.
                With expert team and commitment to excellence, we turn your vision into reality.
              </span>
            </p>

            <div className="opacity-0 animate-para flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center mb-5 sm:mb-6 md:mb-8">
              <Link to="/about" className="w-full sm:w-auto">
                <button className="btn-primary inline-flex items-center justify-center gap-2 group text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-auto">
                  Learn More 
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="btn-secondary inline-flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-auto">
                  Get Started
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Trust Indicators / Stats */}
            <div className="opacity-0 animate-para grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto pt-3 sm:pt-4 md:pt-6">
              <div className="glass-card border-blue-200 hover:border-blue-400 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all duration-300 group hover:shadow-xl relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-1">50+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold leading-tight">Projects Delivered</div>
                </div>
              </div>
              <div className="glass-card border-blue-200 hover:border-blue-400 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all duration-300 group hover:shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-1">100%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold leading-tight">Client Satisfaction</div>
                </div>
              </div>
              <div className="glass-card border-blue-200 hover:border-blue-400 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all duration-300 group hover:shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-1">24/7</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold leading-tight">Support Available</div>
                </div>
              </div>
              <div className="glass-card border-blue-200 hover:border-blue-400 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all duration-300 group hover:shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-1">2+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold leading-tight">Years Experience</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
