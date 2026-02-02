// @ts-nocheck
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the discovery phase."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! All our projects include post-launch support. We offer different support packages ranging from 1 month to 12 months, depending on your needs."
    },
    {
      question: "Can you work with our existing codebase?",
      answer: "Absolutely! We have extensive experience in legacy modernization and can work with your existing code to improve, extend, or completely rebuild it."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile methodology with regular sprints, continuous communication, and iterative development. You'll be involved in every step and receive regular updates."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#00061A]">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-gradient-blue">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about our services.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index, isOpen, onClick }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
      }
    }
  }, [isOpen]);

  return (
    <ScrollAnimationWrapper animation="fade-up" delay={index * 50}>
      <div className="border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300">
        <button
          onClick={onClick}
          className="w-full p-6 flex items-center justify-between text-left group"
        >
          <h3 className="text-lg font-semibold text-white group-hover:text-gradient-blue transition-all duration-300 pr-4">
            {faq.question}
          </h3>
          <svg
            className={`w-6 h-6 text-blue-400 shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="px-6 pb-6 text-gray-400 leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}
