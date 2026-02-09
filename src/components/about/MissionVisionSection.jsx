import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function MissionVisionSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-linear-to-b from-blue-50 to-white">
      {/* Professional circuit-like pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-size-[40px_40px]"></div>
      </div>
      
      {/* Sophisticated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-20 h-20 border-2 border-blue-300/40 rotate-45 animate-float"></div>
        <div className="absolute bottom-24 right-24 w-16 h-16 bg-linear-to-br from-purple-200/40 to-blue-200/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-cyan-300/50 rounded-lg rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-600 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Mission & Vision
            </h2>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <ScrollAnimationWrapper animation="fade-up" delay={100}>
            <div className="relative p-8 md:p-10 rounded-2xl glass-card border border-blue-200 group hover-lift transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl group-hover:bg-blue-300/40 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-blue-200">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  enhance efficiency, and create lasting value. We're committed to delivering 
                  excellence in every project, fostering long-term partnerships built on trust 
                  and mutual success.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Vision */}
          <ScrollAnimationWrapper animation="fade-up" delay={200}>
            <div className="relative p-8 md:p-10 rounded-2xl glass-card border border-purple-200 group hover-lift transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl group-hover:bg-purple-300/40 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-xl bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-purple-200">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  To be recognized globally as the most trusted and innovative IT solutions partner, 
                  transforming industries through cutting-edge technology and creative problem-solving. 
                  We envision a future where technology seamlessly integrates with business to unlock 
                  unlimited potential.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
