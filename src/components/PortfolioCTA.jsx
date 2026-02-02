import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <section className="relative mt-32">
      {/* glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_65%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto rounded-3xl
          border border-white/10 bg-white/5 backdrop-blur-xl
          px-10 py-16 text-center"
      >
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">
          Have a project in mind?
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
          Let’s collaborate to design, build, and launch a digital solution
          that truly represents your brand.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full
              bg-blue-600 px-8 py-3 text-sm font-semibold text-white
              shadow-lg shadow-blue-600/30 transition-all duration-300
              hover:bg-blue-500 hover:shadow-blue-500/40"
          >
            Start Your Project <FaArrowRight />
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full
              border border-white/20 px-8 py-3 text-sm font-semibold
              text-slate-300 transition hover:bg-white/10"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioCTA;
