"use client";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = useCallback(() => {
    setNavbarOpen((prev) => !prev);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-lg border-b border-[#33353F] shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-white tracking-wide transition-transform duration-300 hover:scale-105"
        >
          {"<CodeSync/>"}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              href={link.path}
              title={link.title}
              className="relative text-white font-medium transition-all duration-300 hover:text-[#00ADB5] hover:underline"
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavbar}
          className="md:hidden text-white focus:outline-none transition-all"
          aria-label="Toggle navigation"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-7 w-7 text-[#00ADB5] transition-all duration-300" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-white transition-all duration-300 hover:text-[#00ADB5]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-16 right-0 w-3/4 bg-[#1a1a1a] border-l border-[#33353F] shadow-xl md:hidden"
            >
              <ul className="flex flex-col items-center space-y-6 py-6">
                {navLinks.map((link, index) => (
                  <li key={index} onClick={toggleNavbar}>
                    <NavLink
                      href={link.path}
                      title={link.title}
                      className="text-white text-lg font-semibold transition-all duration-300 hover:text-[#00ADB5]"
                    />
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
              onClick={toggleNavbar}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
