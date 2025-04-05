"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const CoursesPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
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
          guidance. Start learning now! ✨
        </p>
      </div>
      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-12">
        {/* Course 1 */}
        <div className="relative p-4 cursor-pointer rounded-xl bg-slate-800/50 backdrop-blur-sm shadow-md shadow-gray-700/50 overflow-hidden border-2 border-gray-700/50">
          <div className="w-full h-40 mb-3 overflow-hidden rounded-lg">
            <img
              src="./coursethumb.png"
              alt="Full Stack Web Development 2.0"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h2 className="text-base font-semibold text-white mb-1">
            Full Stack Web Development 2.0
          </h2>
          <p className="text-gray-400 text-xs mb-2">
            Master HTML, CSS, JS, and React for modern web apps.
          </p>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>8 weeks</span>
            <span>Beginner</span>
          </div>
          <div className="text-xs text-gray-400 mb-2">
            Language: Hindi & English
          </div>
          <div className="flex gap-4 w-full justify-center">
            <Link
              href="/courses/web-development"
              className="w-full p-[0px] border-[1.5px] overflow-hidden text-center rounded-lg font-medium text-white text-sm shadow-sm transition-all duration-300 hover:brightness-110 bg-slate-900 border-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            >
              <span className="h-full bg-slate-900 rounded-md flex justify-center items-center">
                Explore
              </span>
            </Link>
            <Link
              href="/courses/web-development"
              className="w-full px-4 text-center py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:brightness-110 transition-all duration-300 shadow-sm text-sm"
            >
              Buy Now
            </Link>
          </div>
        </div>

        {/* Course 2 */}
        <div className="relative p-4 cursor-pointer rounded-xl bg-slate-800/50 backdrop-blur-sm shadow-md shadow-gray-700/50 overflow-hidden border-2 border-gray-700/50">
          <div className="w-full h-40 mb-3 overflow-hidden rounded-lg">
            <img
              src="./coursethumb.png"
              alt="Cracking Coding Interview in Java"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h2 className="text-base font-semibold text-white mb-1">
            Cracking Coding Interview in Java
          </h2>
          <p className="text-gray-400 text-xs mb-2">
            Prepare for tech interviews with Java foundations.
          </p>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>10 weeks</span>
            <span>Intermediate</span>
          </div>
          <div className="text-xs text-gray-400 mb-2">
            Language: English
          </div>
          <div className="flex gap-4 w-full justify-center">
            <Link
              href="/courses/full-stack"
              className="w-full p-[0px] border-[1.5px] overflow-hidden text-center rounded-lg font-medium text-white text-sm shadow-sm transition-all duration-300 hover:brightness-110 bg-slate-900 border-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            >
              <span className="h-full bg-slate-900 rounded-md flex justify-center items-center">
                Explore
              </span>
            </Link>
            <Link
              href="/courses/full-stack"
              className="w-full px-4 text-center py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:brightness-110 transition-all duration-300 shadow-sm text-sm"
            >
              Buy Now
            </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div className="relative p-4 cursor-pointer rounded-xl bg-slate-800/50 backdrop-blur-sm shadow-md shadow-gray-700/50 overflow-hidden border-2 border-gray-700/50">
          <div className="w-full h-40 mb-3 overflow-hidden rounded-lg">
            <img
              src="./coursethumb.png"
              alt="Backend Development Course"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h2 className="text-base font-semibold text-white mb-1">
            Backend Development Course
          </h2>
          <p className="text-gray-400 text-xs mb-2">
            Build robust backends with Node.js and databases.
          </p>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>7 weeks</span>
            <span>Intermediate</span>
          </div>
          <div className="text-xs text-gray-400 mb-2">
            Language: Hindi & English
          </div>
          <div className="flex gap-4 w-full justify-center">
            <Link
              href="/courses/backend"
              className="w-full p-[0px] border-[1.5px] overflow-hidden text-center rounded-lg font-medium text-white text-sm shadow-sm transition-all duration-300 hover:brightness-110 bg-slate-900 border-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            >
              <span className="h-full bg-slate-900 rounded-md flex justify-center items-center">
                Explore
              </span>
            </Link>
            <Link
              href="/courses/backend"
              className="w-full px-4 text-center py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:brightness-110 transition-all duration-300 shadow-sm text-sm"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;