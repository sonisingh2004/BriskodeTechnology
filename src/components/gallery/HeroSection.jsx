import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden bg-linear-to-b from-black/90 to-[#00061A]/95" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-size[50px_50px]"></div>
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
