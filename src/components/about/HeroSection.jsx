import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden bg-linear-to-b from-black/90 to-[#00061A]/95" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-size-[50px_50px]"></div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/8 rounded-full blur-3xl bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-72 h-72 bg-cyan-500/6 rounded-full blur-2xl top-1/2 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
            About Us
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            <span className="text-white">Transforming Ideas Into</span>
            <br />
            <span className="text-gradient-blue">Digital Excellence</span>
          </h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={200}>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We are a team of innovators, creators, and problem-solvers dedicated to building 
            cutting-edge technology solutions that drive real business growth.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
