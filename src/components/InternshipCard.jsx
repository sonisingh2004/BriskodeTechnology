// @ts-nocheck
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaStar } from "react-icons/fa";
import Accordion from "./Accordion";

const InternshipCard = ({ title, duration, fee, skills }) => {
  const isFullStack = title.includes("Full Stack");
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card border-blue-200 hover:border-blue-400 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[100px]"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="relative z-10">
        {/* Program Badge */}
        {isFullStack && (
          <div className="absolute -top-2 -right-2 bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <FaStar className="text-xs" />
            RECOMMENDED
          </div>
        )}

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {isFullStack ? (
            <FaLaptopCode className="text-3xl text-blue-600" />
          ) : (
            <FaCode className="text-3xl text-blue-600" />
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        
        {/* Quick Info */}
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">{duration}</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Certificate</span>
        </div>

        <Accordion title="Training Details">
          Duration: {duration} <br />
          Mode: Online & In-Campus <br />
          Fee: {fee}
        </Accordion>

        <Accordion title="Key Responsibilities">
          {skills.map((skill, i) => (
            <p key={i}>• {skill}</p>
          ))}
        </Accordion>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfxKkwmyNSVtEsrNn1bB11l2fu9nWjfes0wUcGetM13cSRi3Q/viewform"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block btn-primary"
        >
          Apply Now
        </motion.a>
      </div>
    </motion.div>
);
};

export default InternshipCard;
