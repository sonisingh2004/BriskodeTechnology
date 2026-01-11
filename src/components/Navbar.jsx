import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-[100]">
      <nav className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-5">

        <div className="flex items-center justify-between translate-x-1 md:translate-x-10 translate-y-5">
          
          {/* Logo */}
          <div className="text-white text-xl font-bold tracking-wide">
            <Link to="/">
              <img src='/assets/logo.png' alt="Briskode Logo" className="h-8 md:h-10"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
            <li className="hover:text-white transition-colors cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <Link to="/internship">Internship</Link>
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded transition-colors relative z-[110]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-lg p-6 animate-fadeIn">
            <ul className="flex flex-col gap-4 text-white/90 text-base font-medium">
              <li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">
                <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">
                <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">
                <Link to="/internship" onClick={() => setIsMenuOpen(false)}>Internship</Link>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer py-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}
