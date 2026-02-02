
import CTASection from '../components/about/CTASection';
import HeroSection from '../components/about/HeroSection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import StorySection from '../components/about/StorySection';
import TeamSection from '../components/about/TeamSection';
import ValuesSection from '../components/about/ValuesSection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';

export default function About() {
  return (
    <div className="bg-[#00061A] min-h-screen">
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TeamSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}
<<<<<<< HEAD
=======

// Hero Section
function HeroSection() {
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

// Story Section with Stats
function StorySection() {
  const stats = [
    { value: 50, label: 'Projects Completed', suffix: '+' },
    { value: 100, label: 'Happy Clients', suffix: '+' },
    { value: 5, label: 'Years of Excellence', suffix: '+' },
    { value: 15, label: 'Team Members', suffix: '' }
  ];

  const storyImages = [
    {
      src: "/assets/gallery/img10.jpeg",
      alt: "Team collaboration",
      marginTop: true
    },
    {
      src: "/assets/gallery/img11.jpeg",
      alt: "Modern workspace",
      marginTop: true
    },
    {
      src: "/assets/gallery/img15.jpeg",
      alt: "Modern workspace",
      marginTop: true
    },
    {
      src: "/assets/gallery/img13.jpeg",
      alt: "Modern workspace",
      marginTop: true
    }
  ];

  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [statsAnimated]);

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      {/* Professional geometric pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_25%,rgba(59,130,246,0.02)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-size-[60px_60px]"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/10 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-purple-500/10 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-linear-to-br from-blue-500/5 to-purple-500/5 rotate-12 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Content */}
          <div>
            <ScrollAnimationWrapper animation="slide-left">
              <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6">
                Our Story
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-[1.2] text-white">
                Building Tomorrow's Solutions{' '}
                <span className="text-gradient-blue">Today</span>
              </h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={200}>
              <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the digital landscape, Briskode Technology 
                  has grown from a small startup to a trusted partner for businesses worldwide. Our 
                  journey began with a simple belief: technology should empower, not complicate.
                </p>
                <p>
                  Today, we combine creative thinking with technical expertise to deliver solutions 
                  that don't just meet expectations—they exceed them. From startups to enterprises, 
                  we've helped countless organizations transform their digital presence and achieve 
                  measurable results.
                </p>
                <p>
                  Our commitment to excellence, innovation, and client success has earned us recognition 
                  as a leading IT solutions provider. But more importantly, it's earned us the trust of 
                  our clients who rely on us to bring their vision to life.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Right: Image Grid */}
          <div className="relative">
            <ScrollAnimationWrapper animation="fade-up" delay={300}>
              <div className="grid grid-cols-2 gap-4">
                {storyImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`relative h-64 rounded-lg overflow-hidden group ${image.marginTop ? 'mt-8' : ''}`}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Stats */}
        <ScrollAnimationWrapper animation="fade-up" delay={400}>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-gray-800 pt-16">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} animate={statsAnimated} />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

function StatCard({ stat, animate }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (animate && !hasAnimated) {
      setHasAnimated(true);
      animateCount();
    }
  }, [animate, hasAnimated]);

  const animateCount = () => {
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <div className="text-center group cursor-default">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-blue mb-3 transition-all duration-300 group-hover:scale-110">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}

// Mission & Vision Section
function MissionVisionSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-black">
      {/* Professional circuit-like pattern */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-size-[40px_40px]"></div>
      </div>
      
      {/* Sophisticated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-20 h-20 border-2 border-blue-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-16 h-16 bg-linear-to-br from-purple-500/10 to-blue-500/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-cyan-500/30 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Mission & Vision
            </h2>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <ScrollAnimationWrapper animation="fade-up" delay={100}>
            <div className="relative p-8 md:p-10 rounded-2xl bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20 group hover:border-blue-500/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
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
            <div className="relative p-8 md:p-10 rounded-2xl bg-linear-to-br from-purple-500/10 to-transparent border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
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

// Core Values Section
function ValuesSection() {
  const values = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Innovation",
      description: "Embracing new technologies and creative approaches to solve complex challenges."
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Collaboration",
      description: "Working together as a team and with our clients to achieve shared success."
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Reliability",
      description: "Building trust through consistent delivery and unwavering commitment to quality."
    },
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "Creativity",
      description: "Thinking outside the box to create unique solutions that stand out."
    },
    {
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
      title: "Integrity",
      description: "Maintaining transparency and ethical practices in all our interactions."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      {/* Professional grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-size-[80px_80px]"></div>
      </div>
      
      {/* Elegant floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/4 w-28 h-28 border border-blue-500/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-linear-to-br from-purple-500/8 to-cyan-500/8 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-16 w-14 h-14 border-2 border-cyan-500/20 rounded-lg animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Our Core Values
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What We <span className="text-gradient-blue">Stand For</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card.querySelector('.value-icon'), {
        scale: 1.2,
        rotate: 360,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card.querySelector('.value-icon'), {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 50}>
      <div
        ref={cardRef}
        className="relative p-8 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-500 group cursor-default overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="value-icon w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
            </svg>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gradient-blue transition-all duration-300">
            {value.title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

// Team Section
function TeamSection() {
  const team = [
    {
      name: "Biswajit Matia",
      role: "CEO",
      image: "/assets/ceo.jpg",
    },
    {
      name: "Mayuresh Mohanty",
      role: "Director",
      image: "/assets/director.jpg",
    },
    {
      name: "Prajukta Mahakud",
      role: "HR",
      image: "/assets/hr.jpg",
    },
    {
      name: "Sameer Kumar Sahu",
      role: "Frontend Developer",
      image: "/assets/fd.jpeg",
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Meet Our Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              The Minds Behind <span className="text-gradient-blue">Briskode</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience and a passion for excellence.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({ member, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(card.querySelector('.team-image'), {
        x: (x - rect.width / 2) * 0.1,
        y: (y - rect.height / 2) * 0.1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card.querySelector('.team-image'), {
        x: 0,
        y: 0,
        duration: 0.5
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 100}>
      <div
        ref={cardRef}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-2xl mb-4">
          <div className="team-image relative aspect-square">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-600/80 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gradient-blue transition-all duration-300">
          {member.name}
        </h3>
        <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm">{member.bio}</p>
      </div>
    </ScrollAnimationWrapper>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const reasons = [
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Proven Expertise",
      description: "Over 5 years of delivering cutting-edge solutions with a track record of successful projects across industries."
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Dedicated Team",
      description: "Passionate professionals committed to your success, providing personalized attention and expert guidance."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Innovation First",
      description: "We stay ahead of technology trends, implementing the latest tools and methodologies for optimal results."
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Timely Delivery",
      description: "We respect your time and deliver projects on schedule without compromising on quality or features."
    },
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly at all times."
    },
    {
      icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden costs, offering exceptional value for your investment."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      {/* Professional grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-size-[80px_80px]"></div>
      </div>

      {/* Elegant floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/4 w-28 h-28 border border-blue-500/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-linear-to-br from-purple-500/8 to-cyan-500/8 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-16 w-14 h-14 border-2 border-cyan-500/20 rounded-lg animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Sets Us <span className="text-gradient-blue">Apart</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Discover why leading businesses trust Briskode for their technology needs.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <WhyChooseCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseCard({ reason, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card.querySelector('.reason-icon'), {
        scale: 1.2,
        rotate: 360,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card.querySelector('.reason-icon'), {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 50}>
      <div
        ref={cardRef}
        className="relative p-8 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-500 group cursor-default overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <div className="reason-icon w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={reason.icon} />
            </svg>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gradient-blue transition-all duration-300">
            {reason.title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {reason.description}
          </p>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

// CTA Section
function CTASection() {
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
>>>>>>> 6e41899918ad06a66bb421649177829325451d6d
