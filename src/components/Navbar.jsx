import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 w-full z-90 pointer-events-none glass-strong shadow-elegant">
      <nav className="max-w-7xl mx-auto px-4 md:px-10 lg:px-10 py-4 md:py-5 pointer-events-auto">

        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-gray-800 text-xl font-bold tracking-wide pointer-events-auto hover-scale">
            <Link to="/">
              <img src='/assets/logo.png' alt="Briskode Logo" className="h-8 md:h-10 transition-transform duration-300 hover:scale-110"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-semibold">
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
    `relative transition-all duration-300 animated-underline
     ${
       isActive
         ? "text-blue-600 font-bold after:w-full"
         : "hover:text-blue-500 after:w-0"
     }
     after:absolute after:-bottom-1 after:left-0 after:h-0.5
     after:bg-gradient-to-r after:from-blue-500 after:to-blue-400 
     after:transition-all after:duration-300`
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
            className="md:hidden text-gray-800 p-2 hover:bg-blue-50 rounded-lg transition-all duration-300 pointer-events-auto fixed right-4 z-110 hover-scale"
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
          <div className="md:hidden mt-4 glass-card rounded-xl p-6 animate-scale-in relative z-105">
            <ul className="flex flex-col gap-4 text-gray-700 text-base font-semibold">
              <li className="hover:text-blue-600 transition-all duration-300 cursor-pointer py-2 border-b border-blue-100 hover:border-blue-300">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li className="hover:text-blue-600 transition-all duration-300 cursor-pointer py-2 border-b border-blue-100 hover:border-blue-300">
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              </li>
              <li className="hover:text-blue-600 transition-all duration-300 cursor-pointer py-2 border-b border-blue-100 hover:border-blue-300">
                <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
              </li>
              <li className="hover:text-blue-600 transition-all duration-300 cursor-pointer py-2 border-b border-blue-100 hover:border-blue-300">
                <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              </li>
              <li className="hover:text-blue-600 transition-all duration-300 cursor-pointer py-2 border-b border-blue-100 hover:border-blue-300">
                <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              </li>
              <li className="hover:text-blue-600 transition-all duration-300 cursor-pointer py-2 border-b border-blue-100 hover:border-blue-300">
                <Link to="/internship" onClick={() => setIsMenuOpen(false)}>Internship</Link>
              </li>
              <li className="hover:text-blue-600 transition-all duration-300 cursor-pointer py-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}
