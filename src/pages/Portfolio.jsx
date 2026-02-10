import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
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
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-20 left-20 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute w-3 h-3 bg-purple-400 rounded-full top-40 right-32 animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-2 h-2 bg-cyan-400 rounded-full bottom-32 left-40 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-3 h-3 bg-blue-300 rounded-full bottom-20 right-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.8)_1px,transparent_0)] bg-size[48px_48px]"></div>
        </div>

        {/* Glow blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl top-20 -left-20 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-purple-200/30 rounded-full blur-3xl bottom-20 -right-20 animate-blob" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200 mb-6"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700 tracking-wide">OUR WORK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            <span className="text-gray-900">Crafting </span>
            <span className="gradient-text">Digital Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
          >
            A showcase of innovative, scalable, and high-impact digital solutions
            delivered for our clients.
          </motion.p>
        </motion.div>
      </section>

      {/* 🔽 PORTFOLIO CONTENT */}
      <section className="relative bg-linear-to-b from-white via-blue-50 to-white py-28 px-6">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-64 h-64 bg-blue-100/20 rounded-full blur-3xl top-40 left-10 animate-blob"></div>
          <div className="absolute w-80 h-80 bg-purple-100/20 rounded-full blur-3xl bottom-40 right-10 animate-blob" style={{ animationDelay: '3s' }}></div>
          <div className="absolute w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob" style={{ animationDelay: '5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our successful projects across web development, enterprise solutions, and government platforms
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-4 mb-16"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border relative overflow-hidden
                  ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 border-blue-600"
                      : "bg-white/80 backdrop-blur-sm text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                  }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-blue-600 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <PortfolioCard {...item} />
                </motion.div>
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
