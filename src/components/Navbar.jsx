import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-100 pointer-events-none bg-[#010a2460]">
      <nav className="max-w-7xl mx-auto px-4 md:px-16 lg:px-20 py-4 md:py-5 pointer-events-auto">

        <div className="flex items-center justify-between md:translate-x-10">
          
          {/* Logo */}
          <div className="text-white text-xl font-bold tracking-wide pointer-events-auto">
            <Link to="/">
              <img src='/assets/logo.png' alt="Briskode Logo" className="h-8 md:h-10"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
  {[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Internship", path: "/internship" },
    { name: "Contact", path: "/contact" },
  ].map((item) => (
    <li key={item.name}>
      <NavLink
  to={item.path}
  className={({ isActive }) =>
    `relative transition-colors duration-300
     ${
       isActive
         ? "text-blue-500 after:w-full"
         : "hover:text-white after:w-0"
     }
     after:absolute after:-bottom-1 after:left-0 after:h-0.5
     after:bg-blue-500 after:transition-all after:duration-300`
  }
>
  {item.name}
</NavLink>

    </li>
  ))}
</ul>


          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded transition-colors pointer-events-auto fixed right-4 z-110"
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
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-lg p-6 animate-fadeIn relative z-105">
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
