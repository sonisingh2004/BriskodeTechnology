// @ts-nocheck
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import AnimatedHeading from './AnimatedHeading';
import AnimatedParagraphs from './AnimatedParagraphs';
import ImageGrid from './ImageGrid';
import StatCard from './StatCard';

export default function HomeAbout() {
  const stats = [
    { value: 50, label: 'Projects', suffix: '+' },
    { value: 100, label: 'Happy Clients', suffix: '+' },
    { value: 2, label: 'Years Experience', suffix: '+' },
    { value: 10, label: 'Awards', suffix: '+' }
  ];

  const images = [
    {
      url: '/assets/gallery/img1.jpeg',
      alt: 'Team collaboration at Briskode',  
      gradient: 'from-blue-600/60 via-blue-600/20',
      span: ''
    },
    {
      url: '/assets/gallery/img2.jpeg',
      alt: 'Modern workspace at Briskode', 
      gradient: 'from-purple-600/60 via-purple-600/20',
      span: ''
    },
    {
      url: '/assets/gallery/img3.jpeg',
      alt: 'Innovation at Briskode',   
      gradient: 'from-cyan-600/60 via-cyan-600/20',
      span: ''
    },
    {
      url: '/assets/gallery/img4.jpeg',
      alt: 'Creative workspace at Briskode',  
      gradient: 'from-pink-600/60 via-pink-600/20',
      span: ''
    }
  ];

  return (
    <section className="relative py-20 md:py-22 px-6 overflow-hidden bg-[#010a24]">
      <div className="max-w-7xl mx-auto relative z-10 ">
        {/* Section Label */}
        <ScrollAnimationWrapper animation="slide-left">
          <p className="text-blue-500 text-sm md:text-2xl font-semibold tracking-[0.2em] uppercase mb-8">
          |OUR STORY
          </p>
        </ScrollAnimationWrapper>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left: Text Content */}
          <div>
            <ScrollAnimationWrapper animation="fade-up" delay={100}>
              <AnimatedHeading />
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={200}>
              <AnimatedParagraphs />
            </ScrollAnimationWrapper>
          </div>

          {/* Right: Image Grid */}
          <div>
            <ScrollAnimationWrapper animation="fade-up" delay={300}>
              <ImageGrid images={images} />
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Stats Section */}
        <ScrollAnimationWrapper animation="fade-up" delay={400}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
