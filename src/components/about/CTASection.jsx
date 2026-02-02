import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-linear-to-b from-black to-[#00061A] overflow-hidden">
      {/* Professional mesh pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_3px_3px,rgba(59,130,246,0.2)_2px,transparent_0)] bg-size-[70px_70px]"></div>
      </div>
      
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl top-1/2 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/8 rounded-full blur-3xl top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-72 h-72 bg-cyan-500/6 rounded-full blur-2xl bottom-20 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2]">
            Ready to Transform Your
            <br />
            <span className="text-gradient-blue">Digital Presence?</span>
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with innovative technology solutions.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
