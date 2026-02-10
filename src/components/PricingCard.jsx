// @ts-nocheck
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({ title, price, duration }) => {
  const isFullStack = title.includes("Full Stack");
  
  const features = isFullStack ? [
    "6 Months Training",
    "Live Project Experience",
    "Industry Certification",
    "Placement Assistance",
    "Flexible Timings",
    "Mentor Support"
  ] : [
    "3 Months Training",
    "Real-world Projects",
    "Certification",
    "Job Assistance",
    "Flexible Schedule",
    "Expert Mentors"
  ];
  
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass-card rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300 group relative overflow-hidden ${
        isFullStack ? 'border-purple-300 hover:border-purple-500' : 'border-blue-200 hover:border-blue-400'
      }`}
    >
      {/* Bestseller Badge */}
      {isFullStack && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg z-20">
          MOST POPULAR
        </div>
      )}
      
      {/* Background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isFullStack ? 'from-purple-50/70 via-pink-50/50 to-cyan-50/50' : 'from-blue-50/50 via-purple-50/50 to-cyan-50/50'
      }`}></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        
        <div className="my-6">
          <motion.p
            whileHover={{ scale: 1.1 }}
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            {price}
          </motion.p>
          <p className="mt-2 text-gray-600 font-medium">{duration}</p>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-6 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <FaCheck className="text-white text-xs" />
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfxKkwmyNSVtEsrNn1bB11l2fu9nWjfes0wUcGetM13cSRi3Q/viewform"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block btn-primary"
        >
          Apply Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PricingCard;
