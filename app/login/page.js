"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data: session } = useSession();

  return (
    <div className=" w-full flex  items-center  min-h-[90vh] mt-16 flex-col gap-8">
      <div className=" text-center">
        <h1 className="text-5xl  lg:text-6xl pb-4 lg:pb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 font-bold border">
          Login or Sign Up
        </h1>
        <p className="text-[15px] lg:text-[17px] text-slate-400">
          Join the future of learning with just one click! 🚀
        </p>
      </div>
      <div className="flex flex-col px-4 py-2 gap-4">
        {/* google */}
        <button
          onClick={() => {
            signIn("google");
          }}
          className="ring-1  ring-slate-500 cursor-pointer bg-slate-700/30 hover:bg-slate-700 transition-all duration-200 ease-in backdrop-blur-none flex justify-center items-center gap-2 hover:scale-105 hover:ring-offset-2 ring-offset-slate-900/95  px-5 py-3 rounded-lg "
        >
          <img className="size-6" src="./google.svg" alt="google" />
          <span className=" tracking-wide font-semibold capitalize text-sm ">
            continue with google
          </span>
        </button>
        {/* X */}
        <button
          onClick={() => {
            signIn("facebook");
          }}
          className="ring-1  ring-slate-500 cursor-pointer bg-slate-700/30 hover:bg-slate-700 transition-all duration-200 ease-in backdrop-blur-none flex justify-center items-center gap-2 hover:scale-105 hover:ring-offset-2 ring-offset-slate-900/95  px-5 py-3 rounded-lg "
        >
          <img className="size-6" src="./facebook.svg" alt="google" />
          <span className=" tracking-wide font-semibold capitalize text-sm ">
            continue with google
          </span>
        </button>
        {/* Github */}
        <button
          onClick={() => {
            signIn("github");
          }}
          className="ring-1  ring-slate-500 cursor-pointer bg-slate-700/30 hover:bg-slate-700 transition-all duration-200 ease-in backdrop-blur-none flex justify-center items-center gap-2 hover:scale-105 hover:ring-offset-2 ring-offset-slate-900/95  px-5 py-3 rounded-lg "
        >
          <img className="size-6 invert" src="./github.svg" alt="google" />
          <span className=" tracking-wide font-semibold capitalize text-sm ">
            continue with google
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
