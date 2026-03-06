// @ts-nocheck
import { useState } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';
import CategoryTabs from './CategoryTabs';
import ServiceCard from './ServiceCard';
import { categories, servicesByCategory } from './servicesData';

export default function ServicesGridSection() {
  const [activeCategory, setActiveCategory] = useState('Development');

  const activeServices = servicesByCategory[activeCategory];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient-blue">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              Comprehensive technology solutions designed to accelerate your business growth.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Category Tabs */}
        <ScrollAnimationWrapper animation="fade-up" delay={100}>
          <CategoryTabs 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </ScrollAnimationWrapper>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activeServices.map((service, index) => (
            <ServiceCard key={`${activeCategory}-${index}`} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
