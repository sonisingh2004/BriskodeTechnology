import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const panelVariants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.92,
    rotateX: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    y: 22,
    scale: 0.97,
    transition: {
      duration: 0.22,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

export default function SiteIntroPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md"
        >
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="popup-scrollbar-hidden relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-cyan-400/20 bg-[#04111f]/95 p-6 shadow-2xl shadow-cyan-900/30 [scrollbar-width:none] [-ms-overflow-style:none] md:p-8"
            style={{ perspective: 1200 }}
          >
            <style>{`.popup-scrollbar-hidden::-webkit-scrollbar{display:none;}`}</style>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl"
              animate={{
                x: [0, 18, 0],
                y: [0, 12, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 right-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"
              animate={{
                x: [0, -16, 0],
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10"
              aria-label="Close popup"
            >
              &times;
            </button>

            <motion.div variants={itemVariants} className="pr-8 pt-6">
              <motion.img
                src="/assets/briskode1.jpeg"
                alt="Briskode information"
                className="w-full rounded-[1.5rem] border border-white/10 object-cover shadow-xl shadow-cyan-950/30"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
