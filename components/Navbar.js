"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  FaBook,
  FaHeadphones,
  FaUser,
  FaBriefcase,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  let email = session.user.email.split("@")[0];

  return (
    <header className="relative w-full px-6 sm:px-8 lg:px-12 py-5 flex justify-between items-center text-lg tracking-wider z-20 shadow-md bg-slate-950/80 backdrop-blur-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        <Link href="/" className="hover:text-blue-400">
          Logo
        </Link>
      </div>

      {/* Desktop Navigation - Centered */}
      <nav className="hidden lg:flex flex-1 justify-center items-center">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-200 hover:text-blue-400 font-medium text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="text-gray-200 hover:text-blue-400 font-medium text-base"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-200 hover:text-blue-400 font-medium text-base"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-200 hover:text-blue-400 font-medium text-base"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Login/SignOut Button (Desktop) */}
      <div className="hidden lg:flex justify-center items-center gap-1">
        {!session ? (
          <button className="border-2 border-t-blue-500 border-l-blue-500 border-r-violet-500 border-b-violet-500 rounded-xl px-4 py-2 text-sm text-white font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 shadow-md">
            <Link href="/login" onClick={() => signIn()}>
              Login / SignUp
            </Link>
          </button>
        ) : (
          <div className="relative">
            <button
              className="border-2 size-10 rounded-full cursor-pointer overflow-hidden text-sm  border-current *:selection:bg-transparent"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src={session?.user?.image || "./avatar.gif"}
                alt={session?.user?.name?.split(" ")[0].toLowerCase() || "user"}
                className="w-full h-full object-cover"
              />
            </button>
            {showDropdown && (
              <ul className="absolute right-0 mt-2 w-full lg:w-48 rounded-xl bg-gradient-to-tl from-gray-800 to-gray-900 text-white shadow-lg z-60 *:cursor-pointer">
                <li
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg rounded-b-none"
                  onClick={() => setShowDropdown(false)}
                >
                  <span className="text-sm  max-w-40 truncate">
                    Hey!{" "}
                    <i className="font-semibold tracking-widest bg-gradient-to-tl from-violet-400 to-blue-400 bg-clip-text text-transparent  ">
                      {session.user.name}
                    </i>{" "}
                  </span>
                </li>
                <hr className=" text-gray-700/50 py-[1px]" />
                <Link
                  href={`${email}/my-courses`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg"
                  onClick={() => setShowDropdown(false)}
                >
                  <FaBook className="text-gray-300" />
                  <span className="text-sm">My Courses</span>
                </Link>
                <Link
                  href={"/contact"}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg"
                  onClick={() => setShowDropdown(false)}
                >
                  <FaHeadphones className="text-gray-300" />
                  <span className="text-sm">Support</span>
                </Link>
                <Link
                  href={`${email}/my-profile`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg"
                  onClick={() => setShowDropdown(false)}
                >
                  <FaUser className="text-gray-300" />
                  <span className="text-sm">My Profile</span>
                </Link>

                <Link
                  href={`${email}/my-purchases`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg"
                  onClick={() => setShowDropdown(false)}
                >
                  <FaShoppingCart className="text-gray-300" />
                  <span className="text-sm">My Purchases</span>
                </Link>
                <li
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg"
                  onClick={() => {
                    signOut();
                    setShowDropdown(false);
                  }}
                >
                  <FaSignOutAlt className="text-gray-300" />
                  <span className="text-sm">Logout</span>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none cursor-pointer">
  {isOpen ? (
    <FaTimes
      size={24}
      className="transition-all duration-200 ease-in hover:rotate-[12deg] active:rotate-0"
    />
  ) : (
    <FaBars
      size={24}
      className="transition-all duration-200 ease-in hover:rotate-[12deg] active:rotate-0"
    />
  )}
</button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-50 top-16 left-0 right-0 bg-slate-950 backdrop-blur-lg shadow-md lg:hidden">
          {!session ? (
            <ul className="flex flex-col items-center space-y-4 py-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-blue-400 font-medium text-base"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-200 hover:text-blue-400 font-medium text-base"
                  onClick={toggleMenu}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-200 hover:text-blue-400 font-medium text-base"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-blue-400 font-medium text-base"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className="border-2 border-t-blue-500 border-l-blue-500 border-r-violet-500 border-b-violet-500 rounded-xl px-4 py-2 text-sm text-white font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 shadow-md">
                  <Link href="/login" onClick={toggleMenu}>
                    Login / SignUp
                  </Link>
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col items-center space-y-2 py-4 text-white *:cursor-pointer">
              <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg w-full text-center ">
                <span className="text-sm">
                  Hey {session?.user?.name.split(" ")[0]}{" "}
                </span>
              </li>
              <Link
                  href={`${email}/my-courses`} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg w-full text-center">
                <FaBook className="text-gray-300" />
                <span className="text-sm">My Courses</span>
              </Link>
              <Link
                  href={"/contact"} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg w-full text-center">
                <FaHeadphones className="text-gray-300" />
                <span className="text-sm">Support</span>
              </Link>
              <Link
                  href={`${email}/my-profile`} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg w-full text-center">
                <FaUser className="text-gray-300" />
                <span className="text-sm">My Profile</span>
              </Link>
              
              <Link
                  href={`${email}/my-purchases`} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg w-full text-center">
                <FaShoppingCart className="text-gray-300" />
                <span className="text-sm">My Purchases</span>
              </Link>
              <li
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700/50 rounded-lg w-full text-center"
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
              >
                <FaSignOutAlt className="text-gray-300" />
                <span className="text-sm">Logout</span>
              </li>
            </ul>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
