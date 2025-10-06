import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About / Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-sm mb-4">
            I am Kuganesan Kangatharan, a passionate Web & Software Developer. Need help or want to collaborate? Reach out anytime!
          </p>
          <p className="text-gray-400 text-sm">
            📧 <a href="mailto:kugankuganesh@gmail.com" className="hover:text-red-500">kugankuganesh@gmail.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="https://kugankuganesh.github.io/2025.github.io/" className="hover:text-red-500">Portfolio</a></li>
            <li><a href="https://kugankuganesh.github.io/home" className="hover:text-red-500">About</a></li>
            <li><a href="https://kugankuganesh.github.io/projects" className="hover:text-red-500">Projects</a></li>
            <li><a href="https://kugankuganesh.github.io/education" className="hover:text-red-500">Education</a></li>
             <li><a href="https://kugankuganesh.github.io/experience" className="hover:text-red-500">Experience</a></li>
            <li><a href="https://kugankuganesh.github.io/contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Me</h2>
          <p className="text-gray-400 text-sm mb-4">Stay connected on social media:</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition">
              <FaFacebookF />
            </a>
           
            <a href="https://www.linkedin.com/in/kuganesan-kangatharan/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm py-6">
        © 2025 Kuganesan Kangatharan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
