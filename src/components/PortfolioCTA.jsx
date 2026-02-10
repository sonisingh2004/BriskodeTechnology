import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <section className="relative mt-32">
      {/* Mesh pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.8)_1px,transparent_0)] bg-size[48px_48px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto rounded-3xl
          glass-card border-blue-200 hover:border-blue-300
          px-10 py-16 text-center"
      >
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Have a project in mind?
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Let’s collaborate to design, build, and launch a digital solution
          that truly represents your brand.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="btn-primary"
          >
            Start Your Project <FaArrowRight />
          </Link>

          <Link
            to="/services"
            className="btn-secondary"         >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioCTA;
