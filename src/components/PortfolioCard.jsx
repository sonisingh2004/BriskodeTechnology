// @ts-nocheck
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const PortfolioCard = ({ title, image, link }) => {
    const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 
      bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-500
      hover:-translate-y-2 hover:shadow-blue-500/20">
        <motion.div
  layout
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.4 }}
  className="group relative rounded-2xl overflow-hidden
  border border-white/10 bg-white/5 backdrop-blur-xl"
>
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-5
<<<<<<< HEAD
        bg-linear-to-t from-black/90 via-black/40 to-transparent
=======
        bg-gradient-to-t from-black/90 via-black/40 to-transparent
>>>>>>> 6e41899918ad06a66bb421649177829325451d6d
        opacity-0 group-hover:opacity-100 transition-opacity duration-500">

        <span className="mb-2 w-fit rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white">
          WEB PROJECT
        </span>

        <h3 className="text-lg font-semibold text-white mb-3">
          {title}
        </h3>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-white transition"
        >
          View Project <FaArrowUpRightFromSquare />
        </a>
      </div>
    
      {/* bottom glow line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
      </motion.div>
    </div>
  );
};

export default PortfolioCard;
