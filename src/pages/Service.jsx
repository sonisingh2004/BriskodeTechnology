// @ts-nocheck
import CTASection from '../components/service/CTASection';
import FAQSection from '../components/service/FAQSection';
import HeroSection from '../components/service/HeroSection';
import ProcessSection from '../components/service/ProcessSection';
import ServicesGridSection from '../components/service/ServicesGridSection';
import TechnologyStackSection from '../components/service/TechnologyStackSection';

export default function Service() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      <HeroSection />
      <ServicesGridSection />
      <ProcessSection />
      <TechnologyStackSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
