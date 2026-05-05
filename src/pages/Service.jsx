// @ts-nocheck
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { servicesByCategory } from '../components/service/servicesData';
import CTASection from '../components/service/CTASection';
import FAQSection from '../components/service/FAQSection';
import HeroSection from '../components/service/HeroSection';
import ProcessSection from '../components/service/ProcessSection';
import ServicesGridSection from '../components/service/ServicesGridSection';
import TechnologyStackSection from '../components/service/TechnologyStackSection';

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export default function Service() {
  const location = useLocation();
  const hash = location.hash?.slice(1) || '';

  const initialCategory = useMemo(() => {
    if (!hash) return 'Development';

    for (const [category, services] of Object.entries(servicesByCategory)) {
      if (services.some((service) => slugify(service.title) === hash)) {
        return category;
      }
    }

    return 'Development';
  }, [hash]);

  return (
    <div className="bg-[#00061A] min-h-screen">
      <HeroSection />
      <ServicesGridSection initialCategory={initialCategory} scrollTarget={hash} />
      <ProcessSection />
      <TechnologyStackSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
