import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen bg-[#1A2238]  ">
      <h1 className="text-9xl font-extrabold text-white tracking-[0.15em]  ">
        404
      </h1>
      <div className="bg-[#1a2238] text-white py-1 font-semibold tracking-wide  text-sm rotate-[22deg] absolute -mt-12 mr-5">
        Page Not Found
      </div>
      <button className="mt-6 -translate-x-2 ">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring">
          <span onClick={()=> navigate(-1)} className="relative block px-8 py-3 bg-[#1a2238] border border-current rounded-3xl ">
            Go Back
          </span>
        </a>
      </button>
    </div>
  );
}

export default NotFound;
