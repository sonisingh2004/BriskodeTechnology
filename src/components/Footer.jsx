import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative px-6 py-20 border-t border-blue-100 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <img
              src="/assets/logo.png"
              alt="Briskode Technology"
              className="h-12 mb-4"
            />
            <p className="text-gray-600 leading-relaxed mb-4">
              Building high-impact digital experiences for modern brands.
            </p>
            <div className="text-gray-600 text-sm">
              <p className="font-semibold text-blue-600 mb-2">ADDRESS</p>
              <p>Near Care Hospital, Chandrasekharpur,</p>
              <p>Bhubaneswar, Odisha 751001</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors animated-underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-600 transition-colors animated-underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors animated-underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors animated-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4 text-lg">Get in Touch</h4>
            <div className="space-y-4 text-gray-600 text-sm">
              <div>
                <p className="font-semibold text-blue-600 mb-2">EMAIL</p>
                <p className="mb-1">briskodetechnology@gmail.com</p>
                <p>hr@briskodetechnology.com</p>
              </div>
              <div>
                <p className="font-semibold text-blue-600 mb-2">PHONE NO.</p>
                <p className="mb-1">+91 9348354248</p>
                <p>+91 8117856483</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            © 2026 Briskode Technology Pvt. Ltd. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5">
            <Link
              to={{ pathname: "https://www.facebook.com/briskodetechnologypvtltd" }}
              target="_blank"
              rel="noreferrer"
              aria-label="facebook"
              className="w-10 h-10 flex items-center justify-center rounded-lg
              border border-blue-200 text-gray-600
              hover:text-white hover:bg-blue-600 hover:border-blue-600
              transition-all duration-300 hover-scale"
            >
              <FaFacebook className="text-lg" />
            </Link>

            <Link
              to={{ pathname: "https://www.linkedin.com/company/flyingdata-technology/posts/" }}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-lg
              border border-blue-200 text-gray-600
              hover:text-white hover:bg-blue-600 hover:border-blue-600
              transition-all duration-300 hover-scale"
            >
              <FaLinkedinIn className="text-lg" />
            </Link>

            <Link
              to={{ pathname: "https://www.instagram.com/briskode_technology_pvtltd/" }}
              target="_blank"
              rel="noreferrer"
              aria-label="INSTAGRAM"
              className="w-10 h-10 flex items-center justify-center rounded-lg
              border border-blue-200 text-gray-600
              hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-500
              transition-all duration-300 hover-scale"
            >
              <FaInstagram className="text-lg"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
