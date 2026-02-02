import React, { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCTA from "../components/PortfolioCTA";

const portfolioData = [
  {
    title: "Mudrasathi",
    image: "/assets/partner/Mudrasathi-work.png",
    link: "https://www.mudrasathi.com/",
    category: "Web",
  },
  {
    title: "Ashish Enterprises",
    image: "/assets/partner/Asishenterprises.png",
    link: "https://www.ashishenterprises.org/",
    category: "Enterprise",
  },
  {
    title: "SJ Classes",
    image: "/assets/partner/SJ.png",
    link: "https://www.sjclasses.co.in/",
    category: "Web",
  },
  {
    title: "Sailesh Mishra",
    image: "/assets/partner/saileshmishra.png",
    link: "http://www.saileshmishra.com",
    category: "Web",
  },
  {
    title: "JJKM ORG",
    image: "/assets/partner/jjkm-org.png",
    link: "http://www.jjkm.org.in",
    category: "Enterprise",
  },
  {
    title: "Trupti Trucknbus",
    image: "/assets/partner/truptitrucknbus.png",
    link: "http://www.truptitrucknbus.com",
    category: "Enterprise",
  },
  {
    title: "Easy Soltechs",
    image: "/assets/partner/easysoltechs.png",
    link: "http://www.easysoltechs.com",
    category: "Web",
  },
  {
    title: "Shaasya Swornam",
    image: "/assets/partner/swasyaswornam.png",
    link: "http://www.shaasyaswornam.com",
    category: "Web",
  },
  {
    title: "Ganjam NAC",
    image: "/assets/partner/Ganjam NAC.png",
    link: "https://swachhganjam.in/",
    category: "Govt",
  },
  {
    title: "Gopalapur NAC",
    image: "/assets/partner/partner-logo10.jpg",
    link: "https://swachhgopalpur.in",
    category: "Govt",
  },
  {
    title: "PB Associate",
    image: "/assets/partner/PB Associate.png",
    link: "https://pbassociate.in/",
    category: "Web",
  },
  {
    title: "Besthomedeveloper",
    image: "/assets/partner/BHD.png",
    link: "http://besthomedeveloper.com",
    category: "Web",
  },
  {
    title: "Pattachitra",
    image: "/assets/partner/Mudrasathi-work.png",
    link: "http://pattachitra.com",
    category: "Web",
  },
];

const filters = ["All", "Web", "Enterprise", "Govt"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category === activeFilter
        );

  return (
    <>
      {/* 🔥 HERO SECTION (LIKE ABOUT PAGE) */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.4)_1px,transparent_0)] bg-size-[48px_48px]"></div>
        </div>

        {/* Glow blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <p className="text-blue-500 text-sm font-semibold tracking-[0.3em] uppercase mb-6">
            Our Work
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-white">Crafting </span>
            <span className="text-gradient-blue">Digital Experiences</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative, scalable, and high-impact digital solutions
            delivered for our clients.
          </p>
        </motion.div>
      </section>

      {/* 🔽 PORTFOLIO CONTENT */}
      <section className="relative bg-linear-to-b from-[#010a24] via-[#020b30] to-black py-28 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence>
              {filteredProjects.map((item) => (
                <PortfolioCard key={item.title} {...item} />
              ))}
            </AnimatePresence>
          </motion.div>

          <PortfolioCTA />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
