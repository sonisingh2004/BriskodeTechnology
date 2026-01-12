import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918117856483"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        bg-green-500 hover:bg-green-600
        text-white
        rounded-full
        flex items-center justify-center
        shadow-lg shadow-green-500/40
        transition-all duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
