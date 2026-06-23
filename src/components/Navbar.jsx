import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Associations", path: "/associations" },
    { name: "NRI Corner", path: "/nri-corner" },
    { name: "Press & Media", path: "/press-media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-white font-bold text-xl md:text-2xl">
              Stable Evershine
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          {/* CTA */}
          <button className="hidden lg:block bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Enquire Now
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-lg">

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg transition-all ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button className="bg-yellow-500 text-black py-3 rounded-xl font-semibold mt-2">
              Enquire Now
            </button>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;