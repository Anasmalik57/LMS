"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger aur close icons ke liye

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto px-12 py-4 flex justify-between items-center text-lg tracking-wider sticky top-0 left-0 z-20 shadow-lg bg-slate-950/50 backdrop-blur-md-125">
      {/* Logo */}
      <div className="text-xl font-bold text-white">
        <span className="text-2xl">
          Logo
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex space-x-8">
          <li className="text-gray-200 hover:text-blue-400 transition-colors duration-300 cursor-pointer font-medium">
            Home
          </li>
          <li className="text-gray-200 hover:text-blue-400 transition-colors duration-300 cursor-pointer font-medium">
            About
          </li>
          <li className="text-gray-200 hover:text-blue-400 transition-colors duration-300 cursor-pointer font-medium">
            Services
          </li>
          <li className="text-gray-200 hover:text-blue-400 transition-colors duration-300 cursor-pointer font-medium">
            Contact
          </li>
        </ul>
      </nav>

      {/* Sign Up Button (Desktop) */}
      <button className="hidden lg:block px-4 text-sm rounded-full cursor-pointer py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md">
        Sign Up
      </button>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gradient-to-br from-slate-950/95 to-slate-900/95 backdrop-blur-lg shadow-lg lg:hidden animate-slide-down">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li className="text-gray-200 hover:text-blue-400 transition-colors duration-300 cursor-pointer font-medium">
              Home
            </li>
            <li className="text-gray-200 hover:text-blue-400 transition-colors duration-300 cursor-pointer font-medium">
              About
            </li>
            <li className="text-gray-200 hover:text-blue-400 transition-colors duration-300 cursor-pointer font-medium">
              Services
            </li>
            <li className="text-gray-200 hover:text-blue-400 transition-colors duration-300 cursor-pointer font-medium">
              Contact
            </li>
            <li>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;