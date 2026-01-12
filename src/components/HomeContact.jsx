// @ts-nocheck
import { useState } from "react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Phone",
      value: "+91 93483 54248 / +91 81178 56483",
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Email",
      value: "hr@briskodetechnology.com",
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Address",
      value:
        "Near Care Hospital, Chandrasekharpur, Bhubaneswar, Odisha 751001",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 px-6 bg-[#010a24]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-blue-500 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let’s Start a Conversation
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Send us a message and we’ll get back to you shortly.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ScrollAnimationWrapper animation="fade-up">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      {info.title === "Email" ? (
                        <a
                          href="mailto:hr@briskodetechnology.com"
                          className="text-gray-400 text-sm hover:text-blue-500"
                        >
                          hr@briskodetechnology.com
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="mt-12 pt-8 border-t border-zinc-800">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <SocialIcon to="https://www.linkedin.com/company/flyingdata-technology/posts/">
                    <FaLinkedinIn />
                  </SocialIcon>
                  <SocialIcon to="https://www.facebook.com/briskodetechnologypvtltd">
                    <FaFacebookF />
                  </SocialIcon>
                  <SocialIcon to="https://www.instagram.com/briskode_technology_pvtltd/">
                    <FaInstagram />
                  </SocialIcon>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollAnimationWrapper animation="fade-up" delay={200}>
              <form
                action="https://formsubmit.co/hr@briskodetechnology.com"
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit config */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_next" value="https://www.briskodetechnology.com/thank-you" />

                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} />
                  <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                  <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white focus:border-blue-500/50"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function Input({ label, type = "text", name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 mb-2">{label} *</label>
      <input
        type={type}
        name={name}
        value={value}
        required
        onChange={onChange}
        className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white focus:border-blue-500/50"
      />
    </div>
  );
}

function SocialIcon({ to, children }) {
  return (
    <Link
      to={to}
      target="_blank"
      className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-blue-500 hover:border-blue-500/40"
    >
      {children}
    </Link>
  );
}
