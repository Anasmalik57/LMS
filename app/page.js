import Background from "@/components/Background";
import React from "react";

const Home = () => {
  return (
    <>
      <Background />
      {/* <div className=""> */}
        <div className="container min-h-[90vh] mx-auto  sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 px-6 items-center ">
          {/* Left Section - Text Content */}
          <div className="flex flex-col justify-center items-start p-8 sm:p-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Unlock Your Future
              </span>
              <br />
              with Cutting-Edge Learning
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-lg mb-8">
              Experience dynamic learning with interactive courses and expert
              guidance. Our LMS sparks curiosity and drives success every step
              of the way. 🎓✨
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md">
              Start Learning Now
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="relative rounded-2xl h-[70vh] w-full overflow-hidden">
            <img
              src="./modelImage.png"
              alt="Learning Illustration"
              className="w-full h-full object-cover object-center rounded-2xl scale-110 transition-transform translate-x-28 -translate-y-4 duration-500"
            />
            <img
              src="./rocket.png"
              className="hidden lg:block absolute top-40 right-16 size-28 -rotate-12 "
              alt="rocket"
            />
            <img
              src="./fluid.png"
              className="hidden lg:block absolute top-13 left-22 size-20 rotate-[0deg] "
              alt="rocket"
            />
            <img
              src="./arrow.png"
              className="hidden lg:block absolute bottom-28 left-20 size-20 rotate-[0deg] "
              alt="rocket"
            />
            <img
              src="./donutRing.png"
              className="hidden lg:block absolute bottom-0 right-20 size-20 rotate-[0deg] "
              alt="rocket"
            />
            
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Home;
