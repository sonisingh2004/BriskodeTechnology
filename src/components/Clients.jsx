// @ts-nocheck
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

export default function Clients() {
  const clients = [
    {
      logo: "/public/assets/advocate.jpg",
    },
    {
    
      logo: "/public/assets/archify & buildify.png",
    },
    {
      
      logo: "/public/assets/asish enterprises.jpg",
    },
    {
      logo: "/public/assets/Easysol Tech.png",
    },
    {
      logo: "/public/assets/EiVi.png",
    },
    {
      logo: "/public/assets/farm enterprise.png",
    },
    {
    
      logo: "/public/assets/ganjam nac.jpeg",
    },
    {
      
      logo: "/public/assets/gopalpur nac.jpg",
    },
    {
      logo:"/public/assets/jjkm.jpeg"
    },
    {
      logo:"/public/assets/mudra sathi.png"
    },
    {
      logo:"/public/assets/nexgenfx.png"
    },
    {
      logo:"/public/assets/odisha govt.jpeg"
    },
    {
      logo:"/public/assets/sj classes.png"
    },
    {
      logo:"/public/assets/trupti motors.jpg"
    },
    {
      logo:"/public/assets/trupti trucknbus.png"
    }
  ];

  // Duplicate clients for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden  bg-[#010a24]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-blue-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              OUR CLIENTS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              We've partnered with innovative companies across diverse industries to deliver 
              exceptional digital solutions that drive business growth.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Clients Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left hover:pause-animation">
              {duplicatedClients.map((client, index) => (
                <div key={`${client.name}-${index}`} className="flex-shrink-0 px-4">
                  <ClientCard client={client} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function ClientCard({ client }) {
  return (
    <div className="group relative bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 cursor-pointer w-64">
      {/* Logo */}
      <div className="mb-4 flex items-center justify-center">
        <div className="w-32 h-32 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center overflow-hidden group-hover:bg-zinc-800 group-hover:border-blue-500/30 transition-all duration-300">
          <img 
            src={client.logo} 
            alt={`${client.name} logo`}
            className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>



      {/* Hover Effect - Arrow */}
      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-zinc-800/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-blue-500">
        <svg 
          className="w-3 h-3 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </div>
    </div>
  );
}
