"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0.3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const iconVariants = {
    hidden: { rotate: 0, opacity: 0 },
    visible: { rotate: 360, opacity: 1, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { 
      y: "-100%", 
      opacity: 0, 
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <header className="w-full px-12 py-4 flex justify-between items-center text-lg tracking-wider sticky top-0 left-0 z-20 shadow-lg bg-slate-950/50 backdrop-blur-md-125">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold text-white"
      >
        <Link href={"/"} className="text-2xl">
          Logo
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.path}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="text-gray-200 hover:text-blue-500 hover:tracking-widest transition-all duration-300 cursor-pointer font-medium"
            >
              <Link href={link.path}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Sign Up Button (Desktop) */}
      <motion.button
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:block px-4 text-sm rounded-full cursor-pointer py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md"
      >
        Sign Up
      </motion.button>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden">
        <motion.button
          onClick={toggleMenu}
          className="text-white focus:outline-none cursor-pointer transition-all duration-300 ease-in"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <FaTimes size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="hamburger"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <FaBars size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 left-0 right-0 bg-gradient-to-br from-slate-950/95 to-slate-900/95 backdrop-blur-lg shadow-lg lg:hidden"
          >
            <ul className="flex flex-col items-center space-y-6 py-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  className="text-gray-200 hover:text-blue-500 hover:tracking-widest transition-all duration-300 cursor-pointer font-medium"
                >
                  <Link href={link.path}>{link.name}</Link>
                </motion.li>
              ))}
              <motion.li variants={buttonVariants} initial="hidden" animate="visible">
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                  Sign Up
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;