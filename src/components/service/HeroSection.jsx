import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-32 overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.4)_1px,transparent_0)] bg-size-[50px_50px]"></div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl top-20 -left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-400/15 rounded-full blur-3xl bottom-20 -right-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-72 h-72 bg-cyan-300/20 rounded-full blur-2xl top-1/2 left-1/4 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-blue-700 text-sm md:text-base font-bold tracking-[0.2em] uppercase">Our Services</span>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1]">
            <span className="text-gray-900">Comprehensive IT Solutions</span>
            <br />
            <span className="gradient-text">For Modern Businesses</span>
          </h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={200}>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            From strategy to implementation, we deliver end-to-end technology services 
            that transform businesses and drive measurable results.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
