"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import Link from "next/link";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 120 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 120 },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="w-full py-12 px-6 sm:px-12 lg:px-8 bg-gradient-to-t from-slate-950/95 to-slate-900/95 backdrop-blur-lg text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Brand & Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
          >
            Logo
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm max-w-xs"
          >
            Revolutionizing education with cutting-edge tools and a passion for
            learning. Be a part of the future. <br />
            let’s shape it together!
          </motion.p>
        </motion.div>

        {/* Middle Section - Quick Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.h3
            variants={itemVariants}
            className="text-lg font-semibold text-white mb-4"
          >
            Quick Links
          </motion.h3>
          <ul className="md:space-y-1  w-full flex flex-row justify-center gap-4 md:flex-col">
            {[
              { name: "Home", path: "/" },
              { name: "Courses", path: "/courses" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <motion.li
                key={link.path}
                variants={itemVariants}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300"
              >
                <Link href={link.path}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section - Social & Newsletter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.h3
            variants={itemVariants}
            className="text-lg font-semibold text-white mb-4"
          >
            Connect With Us
          </motion.h3>
          <div className="flex space-x-4 mb-6">
            {[
              { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100026445944397" },
              { icon: RiTwitterXLine, href: "https://x.com/ItsAnas474" },
              { icon: FaInstagram, href: "https://www.instagram.com/anas.malik5022/" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/anasmalik57/" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                target="_blank"
                className="text-gray-300 hover:text-purple-400 transition-all duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-l-full bg-slate-800/80 text-gray-300 border-none focus:outline-none"
            />
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className="px-4 cursor-pointer py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
      >
        <motion.p variants={itemVariants}>
          © {new Date().getFullYear()} Logo. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
