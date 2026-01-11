import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#010a24] px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full text-center rounded-3xl
        border border-white/10 bg-white/5 backdrop-blur-xl p-10"
      >
        {/* Icon */}
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Thank You!
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Your message has been sent successfully.  
          Our team will contact you shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold
            hover:bg-blue-500 transition-all"
          >
            Go to Home
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-full border border-white/20 text-white
            hover:bg-white/5 transition-all"
          >
            Send Another Message
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
