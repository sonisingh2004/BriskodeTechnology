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
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden
        border-2 border-gray-200 bg-white shadow-lg
        hover:border-blue-400 hover:shadow-2xl
        transition-all duration-500 cursor-pointer"
      onClick={() => window.open(link, '_blank')}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none"></div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-500/0 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[100px]"></div>

      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-5
        bg-linear-to-t from-blue-600/95 via-blue-500/70 to-transparent
        opacity-0 group-hover:opacity-100 transition-all duration-500">

        <motion.span
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-2 w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-200 backdrop-blur-sm"
        >
          WEB PROJECT
        </motion.span>

        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-semibold text-white mb-3"
        >
          {title}
        </motion.h3>

        <motion.a
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-100 transition group/link"
        >
          View Project <FaArrowUpRightFromSquare className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </motion.a>
      </div>
    
      {/* bottom glow line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 transition-all duration-700 group-hover:w-full shadow-lg shadow-blue-500/50"></div>
      
      {/* Pulse ring on hover */}
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default PortfolioCard;
