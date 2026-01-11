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

    {/* Video Background */}
<div className="absolute inset-0 overflow-hidden  ">

  {/* Landscape Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/assets/video.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45 z-[5]" />

</div>

      {/* Content */}
      <div className="relative z-[20] h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-10 w-full py-32 md:py-40">

          {/* GRID LAYOUT */}
          <div className="grid md:grid-cols-12 gap-16 items-center ">

            {/* Left: Description */}
            <div className="md:col-span-7 ">
              <h1
                ref={titleRef}
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8"
              >
                <span className="word opacity-0 inline-block">Welcome</span>{" "}
                <span className="word opacity-0 inline-block">to</span>{" "}
                <span className="word opacity-0 inline-block text-gradient-blue">Briskode</span>
              </h1>
              
              <p
                ref={paraRef}
                className="opacity-0 animate-para text-white/95 text-base md:text-lg leading-relaxed space-y-6 mb-8"
              >
                <span className="block text-lg md:text-xl font-medium mb-4">
                  Your trusted partner in digital transformation.
                </span>
                <span className="block text-base md:text-lg text-white/80">
                  We deliver cost-effective, internationally standard websites, mobile apps, and eCommerce solutions tailored to your business needs. With expert team and commitment to excellence, we turn your vision into reality.
                </span>
              </p>

              <Link to="/about">
                <button className="opacity-0 animate-para px-8 py-3 bg-white text-gray-900 font-medium text-sm rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Learn More →
                </button>
              </Link>
            </div>

            {/* Right: Portrait Video */}
            <div className="md:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] lg:max-w-[500px]
                            h-[340px] lg:h-[400px]
                            rounded-2xl overflow-hidden 
                            shadow-2xl border border-white/20 
                            backdrop-blur-sm opacity-0 animate-para">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/company.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            </div>

          </div>
        </div>
      
    </section>
  );
}
