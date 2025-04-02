"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 120 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const floatVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: [0, -15, 0],
      transition: {
        y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className="container mx-auto sm:px-6 lg:px-8 py-12 px-6 overflow-x-hidden">
      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Discover Our Story
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-transparent bg-clip-text bg-gradient-to-tl from-gray-500 via-gray-400 to-gray-300 text-sm md:text-lg max-w-3xl mx-auto"
        >
          We’re a team redefining education with passion and innovation. <span className="text-neutral-500">🌟</span>
        </motion.p>
      </motion.div>

      {/* Main Content - Grid Layout with More Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 - Mission */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-white mb-3"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Our Mission
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm md:text-base mb-4"
          >
            Empowering learners with tools and knowledge to shape their future.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            Learn More
          </motion.button>
          <motion.div
            variants={floatVariants}
            className="hidden lg:block absolute -top-4 -right-4 size-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
          />
        </motion.div>

        {/* Card 2 - Vision */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-white mb-3"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Our Vision
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm md:text-base mb-4"
          >
            Creating a world where learning is limitless and inspiring.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            Explore Vision
          </motion.button>
          <motion.div
            variants={floatVariants}
            className="hidden lg:block absolute -bottom-4 -left-4 size-12 border-2 border-purple-400 rounded-full opacity-40"
          />
        </motion.div>

        {/* Card 3 - Values */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-white mb-3"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Our Values
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm md:text-base mb-4"
          >
            Creativity, excellence, and inclusivity drive our every step.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            See Values
          </motion.button>
          <motion.div
            variants={floatVariants}
            className="hidden lg:block absolute top-2 right-2 size-14 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30"
          />
        </motion.div>

        {/* Card 4 - Team */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-white mb-3"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Our Team
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm md:text-base mb-4"
          >
            A passionate crew of innovators and educators.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            Meet Us
          </motion.button>
          <motion.div
            variants={floatVariants}
            className="hidden lg:block absolute -top-4 -left-4 size-12 border-2 border-blue-400 rounded-full opacity-40"
          />
        </motion.div>

        {/* Card 5 - Approach */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-white mb-3"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Our Approach
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm md:text-base mb-4"
          >
            Blending tech and creativity for impactful learning.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            Discover How
          </motion.button>
          <motion.div
            variants={floatVariants}
            className="hidden lg:block absolute bottom-2 right-2 size-14 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
          />
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mt-12"
      >
        <motion.h3
          variants={itemVariants}
          className="text-xl md:text-3xl font-semibold text-white mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Be Part of Our Vision
          </span>
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-transparent bg-clip-text bg-gradient-to-tl from-gray-500 via-gray-400 to-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-6"
        >
          Join us in shaping the future of education.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md text-lg"
        >
          Join Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;