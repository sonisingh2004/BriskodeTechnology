import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import HomeContact from "../components/HomeContact";
import ContactLocation from "../components/ContactLocation";

export default function Contact() {
  return (
    <PageTransition>
      <>
        {/* 🔥 HERO SECTION */}
        <section
          className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.4)_1px,transparent_0)] bg-size-[48px_48px]"></div>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 max-w-4xl text-center"
          >
            <p className="text-blue-500 text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Contact Us
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-white">Let’s </span>
              <span className="text-gradient-blue">Talk & Collaborate</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Have a question, idea, or project in mind?  
              We’re here to help you turn it into reality.
            </p>
          </motion.div>
        </section>

        {/* 🔽 CONTACT CONTENT */}
        <main className="bg-[#010a24]">
          <HomeContact />
          <ContactLocation />
        </main>
      </>
    </PageTransition>
  );
}
