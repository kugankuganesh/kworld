import React from 'react';
import logo from './../assets/Images/logo.png';
import { IoLogoGithub } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-20 md:w-24 cursor-pointer" onClick={() => navigate('/')} />
      </div>

      {/* Motivational Quote */}
      <div className="my-4 md:my-0 text-center">
        <p className="text-gray-700 italic text-sm md:text-lg">
          "Code is like humor. When you have to explain it, it’s bad." 💻
        </p>
      </div>

      {/* GitHub Button */}
      <div>
        <a 
          href="https://github.com/kugankuganesh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm md:text-base font-semibold"
        >
          GitHub <IoLogoGithub className="text-lg md:text-xl" />
        </a>
      </div>
    </header>
  );
}

export default Header;
