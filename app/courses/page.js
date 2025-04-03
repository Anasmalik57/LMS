// /courses/page.js
"use client"; // Ensure this is at the top
import React, { useState, useEffect } from "react"; // Added useEffect for client-side init
import { motion } from "framer-motion";
import Link from "next/link";

const CoursesPage = () => {
  // Force client-side render with useEffect to avoid SSR mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Sample courses data with thumbnail URLs
  const courses = [
    {
      title: "Full Stack Web Development 2.0",
      description: "Master HTML, CSS, JS, and React for modern web apps.",
      duration: "8 weeks",
      level: "Beginner",
      path: "/courses/web-development",
      thumbnail: "./coursethumb.png", // Replace with actual image path
      language: "Hindi & English",
    },
    {
      title: "Cracking Coding Interview in Java",
      description: "Prepare for tech interviews with Java foundations.",
      duration: "10 weeks",
      level: "Intermediate",
      path: "/courses/full-stack",
      thumbnail: "./coursethumb.png", // Replace with actual image path
      language: "English",
    },
    {
      title: "Backend Development Course",
      description: "Build robust backends with Node.js and databases.",
      duration: "7 weeks",
      level: "Intermediate",
      path: "/courses/backend",
      thumbnail: "./coursethumb.png", // Replace with actual image path
      language: "Hindi & English",
    },
  ];

  if (!isClient) {
    return null; // Render nothing on server to avoid hydration mismatch
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-8 lg:px-12 overflow-x-hidden overflow-y-scroll">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Explore Our Courses
          </span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          Dive into world-class courses with stunning visuals and expert
          guidance. Start learning now!{" "}✨
        </p>
      </div>
      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-12">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative p-4 cursor-pointer rounded-xl bg-slate-800/50 backdrop-blur-sm shadow-md shadow-gray-700/50 overflow-hidden border-2 border-gray-700/50"
          >
            {/* Thumbnail Image */}
            <div className="w-full h-40 mb-3 overflow-hidden rounded-lg">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h2 className="text-base font-semibold text-white mb-1">
              {course.title}
            </h2>
            <p className="text-gray-400 text-xs mb-2">{course.description}</p>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>{course.duration}</span>
              <span>{course.level}</span>
            </div>
            <div className="text-xs text-gray-400 mb-2">
              Language: {course.language}
            </div>
            <div className="flex gap-4 w-full justify-center">
              <Link href={course.path} className="w-full p-[0px] border-[1.5px] overflow-hidden text-center rounded-lg font-medium text-white text-sm shadow-sm transition-all duration-300 hover:brightness-110 bg-slate-900 border-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                <span className="h-full bg-slate-900 rounded-md flex justify-center items-center">
                  Explore
                </span>
              </Link>
              <Link href={course.path} className="w-full px-4 text-center  py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:brightness-110 transition-all duration-300 shadow-sm text-sm">
                Buy Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;