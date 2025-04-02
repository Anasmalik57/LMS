"use client"
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1.1, 
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const floatVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: [0, -10, 0], 
      transition: { 
        y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <div className="container mx-auto sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 px-6 items-center overflow-x-hidden">
      {/* Left Section - Text Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8 sm:p-12"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl @max-[35rem]:text-2xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Unlock Your Future
          </span>
          <br />
          with Cutting-Edge Learning
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-transparent bg-clip-text bg-gradient-to-tl from-gray-500 via-gray-400 to-gray-300 text-sm tracking-wide md:text-lg max-w-lg mb-8"
        >
          Experience dynamic learning with interactive courses and expert
          guidance. Our platform sparks curiosity and drives success every step
          of the way. <span className="text-neutral-500">🎓✨</span>
        </motion.p>
        <motion.button
          variants={buttonVariants}
          className="cursor-pointer px-6 py-4 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
        >
          Start Learning Now
        </motion.button>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative rounded-2xl lg:h-[70vh] w-full"
      >
        <motion.img
          variants={imageVariants}
          src="./modelImage.png"
          alt="Learning Illustration"
          className="w-full translate-x-15 h-[45vh] md:w-full md:h-full object-cover object-center rounded-2xl scale-110 transition-transform md:translate-x-28 -translate-y-4 duration-500"
        />
        <motion.img
          variants={floatVariants}
          src="./rocket.png"
          className="hidden lg:block absolute top-40 right-16 size-28 -rotate-12"
          alt="rocket"
        />
        <motion.img
          variants={floatVariants}
          src="./fluid.png"
          className="hidden lg:block absolute top-13 left-22 size-20 rotate-[0deg]"
          alt="rocket"
        />
        <motion.img
          variants={floatVariants}
          src="./arrow.png"
          className="hidden lg:block absolute bottom-28 left-20 size-20 rotate-[0deg]"
          alt="rocket"
        />
        <motion.img
          variants={floatVariants}
          src="./donutRing.png"
          className="hidden lg:block absolute bottom-0 right-20 size-20 rotate-[0deg]"
          alt="rocket"
        />
      </motion.div>
    </div>
  );
};

export default Home;