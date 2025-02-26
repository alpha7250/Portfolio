import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] border-opacity-50 text-white bg-[#121212] py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <span className="text-xl font-semibold tracking-wide text-gray-300">
          Aman
        </span>

        {/* Social Links */}
        <div className="flex gap-4 my-4 md:my-0">
          <a href="https://github.com/alpha7250" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 text-2xl hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/aman-kumar-781b04244/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-400 text-2xl hover:text-white transition duration-300" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-400 text-2xl hover:text-white transition duration-300" />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-gray-500 text-sm opacity-80">
          © {new Date().getFullYear()} Aman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
