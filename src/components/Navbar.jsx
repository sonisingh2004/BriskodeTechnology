import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { servicesByCategory } from "./service/servicesData";
import { products } from "../data/productData";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const servicesHoverTimeout = useRef(null);
  const productsHoverTimeout = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(servicesHoverTimeout.current);
      clearTimeout(productsHoverTimeout.current);
    };
  }, []);

  const openServicesDropdown = () => {
    clearTimeout(servicesHoverTimeout.current);
    setShowServicesDropdown(true);
  };

  const closeServicesDropdown = () => {
    clearTimeout(servicesHoverTimeout.current);
    servicesHoverTimeout.current = window.setTimeout(() => {
      setShowServicesDropdown(false);
    }, 120);
  };

  const openProductsDropdown = () => {
    clearTimeout(productsHoverTimeout.current);
    setShowProductsDropdown(true);
  };

  const closeProductsDropdown = () => {
    clearTimeout(productsHoverTimeout.current);
    productsHoverTimeout.current = window.setTimeout(() => {
      setShowProductsDropdown(false);
    }, 120);
  };

  const serviceMenuSections = Object.entries(servicesByCategory);
  const slugify = (value) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <header className="fixed left-0 w-full z-90 pointer-events-none bg-[#010a2460]">
      <nav className="max-w-7xl mx-auto px-4 md:px-10 lg:px-10 py-4 md:py-5 pointer-events-auto ">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="text-white text-xl font-bold tracking-wide pointer-events-auto">
            <Link to="/">
              <img src='/assets/logo.png' alt="Briskode Logo" className="h-8 md:h-10" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Gallery", path: "/gallery" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Internship", path: "/internship" },
              { name: "Awards", path: "/awards" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition-colors duration-300
     ${isActive
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

            <li
              className="relative"
              onMouseEnter={openServicesDropdown}
              onMouseLeave={closeServicesDropdown}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `relative transition-colors duration-300
     ${isActive
                      ? "text-blue-500 after:w-full"
                      : "hover:text-white after:w-0"
                    }
     after:absolute after:-bottom-1 after:left-0 after:h-0.5
     after:bg-blue-500 after:transition-all after:duration-300`
                }
              >
                Services
              </NavLink>

              <div
                onMouseEnter={openServicesDropdown}
                onMouseLeave={closeServicesDropdown}
                className={`absolute right-0 -translate-x-10 top-full w-220 rounded-4xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/40 transition-all duration-300 z-50 ${showServicesDropdown ? 'visible opacity-100 translate-y-0 pointer-events-auto' : 'invisible opacity-0 translate-y-1 pointer-events-none'}`}
              >
                <div className="grid grid-cols-5 gap-4 p-5 text-sm text-white/90">
                  {serviceMenuSections.map(([sectionTitle, items]) => (
                    <div key={sectionTitle}>
                      <p className="mb-4 text-white font-semibold">{sectionTitle}</p>
                      <ul className="space-y-3">
                        {items.map((item) => (
                          <li key={item.title} className="flex items-start gap-3 hover:text-white transition-colors cursor-pointer">
                            <span className="mt-1 text-blue-400">•</span>
                            <Link to={`/services#${slugify(item.title)}`} className="block">
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li
              className="relative"
              onMouseEnter={openProductsDropdown}
              onMouseLeave={closeProductsDropdown}
            >
              <button className="relative transition-colors duration-300 hover:text-white text-left text-white/80 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                Products
              </button>

              <div
                onMouseEnter={openProductsDropdown}
                onMouseLeave={closeProductsDropdown}
                className={`absolute right-0 top-full w-160 rounded-4xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/40 transition-all duration-300 z-50 ${showProductsDropdown ? 'visible opacity-100 translate-y-0 pointer-events-auto' : 'invisible opacity-0 translate-y-1 pointer-events-none'}`}
              >
                <ul className="grid grid-cols-3 gap-2 p-4 text-sm text-white/90">
                  {products.map((product) => (
                    <li key={product.slug} className="rounded-xl px-3 py-2 hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-3">
                      <span className="text-blue-400">•</span>
                      <Link to={`/product/${product.slug}`} className="block">
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
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
              <li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">
                <Link to="/awards" onClick={() => setIsMenuOpen(false)}>Awards</Link>
              </li>
              <li className="pt-4 pb-2 border-b border-white/10">
                <p className="text-white text-base font-semibold">Products</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80 pl-3">
                  {products.map((product) => (
                    <li key={product.slug} className="hover:text-white transition-colors cursor-pointer py-1">
                      <Link to={`/product/${product.slug}`} onClick={() => setIsMenuOpen(false)}>
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
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
