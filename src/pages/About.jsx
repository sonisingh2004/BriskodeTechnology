
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
