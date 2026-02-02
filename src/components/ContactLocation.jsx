import React from "react";
import { motion } from "framer-motion";

export default function ContactLocation() {
  return (
    <section className="bg-[#010a24] px-6 pb-28">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Location
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Visit Our <span className="text-blue-500">Office</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We are located at Chandrasekharpur, Bhubaneswar. Feel free to visit us
            or reach out anytime.
          </p>
        </motion.div>

        {/* Location Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image / Banner */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src="/assets/location/banner.002.avif"
              alt="Briskode Technology Office"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              title="Briskode Technology Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.1531330080047!2d85.80378397391229!3d20.33529161123774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867a64c1463c3d95%3A0x27bbf60f84085171!2sBriskode%20Technology%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1737959369236!5m2!1sen!2sin"
              width="100%"
              height="350"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-87.5"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
