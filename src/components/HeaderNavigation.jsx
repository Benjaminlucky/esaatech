import React, { useState } from "react";
import { navItems } from "../data.js";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";

function HeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Offset so section content appears just below the header
  const scrollOffset = -120;

  return (
    <div className="navigation w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="navigation__wrapper flex justify-between items-center w-[90%] mx-auto py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="navigation__logo">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={scrollOffset}
            spy={true}
            onSetActive={(id) => setActive(id)}
            className="cursor-pointer"
          >
            <img src="/esaaconsulting.png" alt="Logo" />
          </ScrollLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex navigation__menu items-center gap-16">
          <div className="navs flex items-center gap-6 uppercase">
            {navItems.map((menu, index) => (
              <ScrollLink
                key={index}
                to={menu.id}
                smooth={true}
                duration={500}
                offset={scrollOffset}
                spy={true}
                onSetActive={(id) => setActive(id)}
                className={`cursor-pointer transition-colors duration-300 ${
                  active === menu.id
                    ? "text-blue-400 text-md font-semibold"
                    : "text-md text-navy-500 hover:text-blue-400"
                }`}
              >
                {menu.label}
              </ScrollLink>
            ))}
          </div>
          <div className="contact">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={scrollOffset}
              spy={true}
              onSetActive={(id) => setActive(id)}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300 text-md font-semibold cursor-pointer"
            >
              Contact us
            </ScrollLink>
          </div>
        </div>

        {/* Mobile/Tablet Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg px-6 py-4"
          >
            <div className="flex flex-col gap-4 uppercase">
              {navItems.map((menu, index) => (
                <ScrollLink
                  key={index}
                  to={menu.id}
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  spy={true}
                  onSetActive={(id) => setActive(id)}
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer transition-colors duration-300 ${
                    active === menu.id
                      ? "text-blue-400 font-semibold"
                      : "text-navy-500 hover:text-blue-400"
                  }`}
                >
                  {menu.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={scrollOffset}
                spy={true}
                onSetActive={(id) => setActive(id)}
                onClick={() => setMenuOpen(false)}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300 text-md font-semibold cursor-pointer text-center"
              >
                Contact us
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeaderNavigation;
