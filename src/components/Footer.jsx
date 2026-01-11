import { Link } from "react-router-dom";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative px-6 py-20 border-t border-white/10 overflow-hidden bg-[#010a24]">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-radial opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <img
              src="/assets/logo.png"
              alt="Briskode Technology"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 leading-relaxed mb-4">
              Building high-impact digital experiences for modern brands.
            </p>
            <div className="text-gray-400 text-sm">
              <p className="font-semibold text-blue-500 mb-2">ADDRESS</p>
              <p>Near Care Hospital, Chandrasekharpur,</p>
              <p>Bhubaneswar, Odisha 751001</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div>
                <p className="font-semibold text-blue-500 mb-2">EMAIL</p>
                <p className="mb-1">briskodetechnology@gmail.com</p>
                <p>hr@briskodetechnology.com</p>
              </div>
              <div>
                <p className="font-semibold text-blue-500 mb-2">PHONE NO.</p>
                <p className="mb-1">+91 9348354248</p>
                <p>+91 8117856483</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © 2026 Briskode Technology Pvt. Ltd. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">
            <Link
              to={{ pathname: "https://twitter.com" }}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center rounded-lg
              border border-white/10 text-gray-400
              hover:text-white hover:border-blue-500/40
              hover:bg-blue-500/10 transition-all duration-300"
            >
              <FaXTwitter className="text-lg" />
            </Link>

            <Link
              to={{ pathname: "https://www.linkedin.com" }}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-lg
              border border-white/10 text-gray-400
              hover:text-white hover:border-blue-500/40
              hover:bg-blue-500/10 transition-all duration-300"
            >
              <FaLinkedinIn className="text-lg" />
            </Link>

            <Link
              to={{ pathname: "https://github.com" }}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-lg
              border border-white/10 text-gray-400
              hover:text-white hover:border-blue-500/40
              hover:bg-blue-500/10 transition-all duration-300"
            >
              <FaGithub className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
