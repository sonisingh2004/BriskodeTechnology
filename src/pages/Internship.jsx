import React from "react";
import { motion } from "framer-motion";
import InternshipCard from "../components/InternshipCard";
import PricingCard from "../components/PricingCard";
import PageTransition from "../components/PageTransition";

const Internship = () => {
  return (
    <PageTransition>
      <>
        {/* 🔥 HERO SECTION */}
        <section
          className="relative min-h-[60vh] flex items-center justify-center px-6 py-32 overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.4)_1px,transparent_0)] bg-size-[48px_48px]"></div>
          </div>

          {/* Glow blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse"></div>
          </div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 max-w-4xl text-center"
          >
            <p className="text-blue-500 text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Internship Program
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-white">Launch Your </span>
              <span className="text-gradient-blue">Career With Us</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Learn from industry experts, work on real projects, and gain
              hands-on experience that prepares you for the real world.
            </p>
          </motion.div>
        </section>

        {/* 🔽 MAIN CONTENT */}
        <section className="bg-linear-to-b from-[#010a24] via-[#020b30] to-black py-28 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Internship Cards */}
            <div className="grid gap-10 md:grid-cols-2">
              <InternshipCard
                title="Web Developer Internship"
                duration="3 Months"
                fee="₹6,000 + ₹1,000 Reg Fee"
                skills={[
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "JavaScript",
                  "Python Basics",
                ]}
              />

              <InternshipCard
                title="Full Stack Developer Internship"
                duration="6 Months"
                fee="₹12,000 + ₹1,000 Reg Fee"
                skills={[
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Express",
                  "Cloud Deployment",
                ]}
              />
            </div>

            {/* Pricing */}
            <div className="mt-28 grid gap-10 md:grid-cols-2">
              <PricingCard
                title="Web Developer Internship"
                price="₹6,000"
                duration="3 Months"
              />
              <PricingCard
                title="Full Stack Internship"
                price="₹12,000"
                duration="6 Months"
              />
            </div>

            {/* Apply Section */}
            <div className="mt-28 grid gap-10 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
                <h3 className="text-2xl font-bold text-white">
                  How to Apply
                </h3>
                <p className="mt-4 text-slate-400">
                  Send your CV and work samples to:
                </p>
                <a
                  href="mailto:hr@briskodetechnology.com"
                  className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500 transition"
                >
                  hr@briskodetechnology.com
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
                <h3 className="text-2xl font-bold text-white">
                  Eligibility
                </h3>
                <ul className="mt-4 space-y-2 text-slate-400">
                  <li>• B.Tech</li>
                  <li>• BCA</li>
                  <li>• MCA</li>
                  <li>• Any Graduation</li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </>
    </PageTransition>
  );
};

export default Internship;
