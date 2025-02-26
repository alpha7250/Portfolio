"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  return (
    <section id="contact" className="relative my-12 py-24 flex flex-col items-center">
      {/* Background Effect (Fix: pointer-events-none to prevent blocking clicks) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-30 blur-2xl pointer-events-none"></div>

      <div className="text-center z-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-300 max-w-lg mx-auto mb-6">
          I’m always open to discussing new projects, collaborations, or just a chat. Feel free to reach out!
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center z-10">
        {/* Phone */}
        <a
          href="tel:+918085978598"
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition z-10"
        >
          <FaPhoneAlt className="text-blue-500 text-4xl" />
          <span className="text-xl text-white">+91-8085978598</span>
        </a>

        {/* Email */}
        <a
          href="mailto:aman7250252500@gmail.com"
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center space-x-4 hover:bg-gray-700 transition z-10"
        >
          <FaEnvelope className="text-red-500 text-4xl" />
          <span className="text-xl text-white">aman7250252500@gmail.com</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-8 z-10">
        <a
          href="https://github.com/alpha7250"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition z-10"
        >
          <FaGithub className="text-white text-3xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/aman-kumar-781b04244/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition z-10"
        >
          <FaLinkedin className="text-blue-400 text-3xl" />
        </a>
      </div>
    </section>
  );
};

export default EmailSection;
