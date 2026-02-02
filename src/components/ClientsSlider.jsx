import React from "react";

const clients = [
  "/assets/partner/Mudrasathi-work.png",
  "/assets/partner/Asishenterprises.png",
  "/assets/partner/SJ.png",
  "/assets/partner/saileshmishra.png",
  "/assets/partner/jjkm-org.png",
  "/assets/partner/truptitrucknbus.png",
  "/assets/partner/easysoltechs.png",
  "/assets/partner/swasyaswornam.png",
  "/assets/partner/Ganjam NAC.png",
  "/assets/partner/partner-logo10.jpg",
  "/assets/partner/PB Associate.png",
  "/assets/partner/BHD.png",
];

const ClientsSlider = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-b from-black via-[#020b30] to-[#010a24]">
      
      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-500 text-sm font-semibold tracking-widest uppercase">
            Trusted By
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            Our Clients & Partners
          </h2>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
            
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-45"
              >
                <img
                  src={logo}
                  alt="client logo"
                  loading="lazy"
                  className="h-14 object-contain opacity-70 grayscale transition
                    hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
