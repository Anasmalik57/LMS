// pages/teacher-dashboard.js
"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const TeacherDashboard = () => {
  const { data: session } = useSession();
  return (
    <div className=" p-6 text-white">
      <nav className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-4 mb-6">
        <h1 className="text-3xl font-extrabold">Teacher Dashboard</h1>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Profile Info</h2>
          <div className="flex items-center gap-4">
          <div className="border-2 size-20 rounded-full cursor-pointer overflow-hidden text-sm  border-current *:selection:bg-transparent">
              <img
                src={session?.user?.image || "./avatar.png"}
                alt="Profile"
                className=" object-cover"
              />
            </div>
            <div>
              <p className="text-lg">Teacher Name</p>
              <p className="text-gray-300">teacher@example.com</p>
              <button className="m  t-2 px-3 py-1 bg-green-500 rounded-full text-sm hover:bg-green-600">Edit Profile</button>
            </div>
          </div>
        </div>
        {/* Courses Taught */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Courses Taught</h2>
          <ul className="space-y-3">
            <li className="text-gray-200">Web Development (25 Students)</li>
            <li className="text-gray-200">Data Science (15 Students)</li>
          </ul>
        </div>
        {/* Student List */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Students</h2>
          <ul className="space-y-2">
            <li className="text-gray-200">Mohd Anas <button className="ml-2 text-blue-400">Grade</button></li>
            <li className="text-gray-200">Student 2 <button className="ml-2 text-blue-400">Grade</button></li>
          </ul>
        </div>
        {/* Assignment Grading */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Grade Assignments</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="text-gray-300">Student</th>
                <th className="text-gray-300">Assignment</th>
                <th className="text-gray-300">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-gray-200">Mohd Anas</td>
                <td className="text-gray-200">Assignment 1</td>
                <td><input type="text" className="bg-gray-700 text-white p-1 rounded" placeholder="Enter Grade" /></td>
              </tr>
            </tbody>
          </table>
          <button className="mt-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">Submit Grades</button>
        </div>
        {/* Announcements */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          <textarea className="w-full p-2 bg-gray-700 text-white rounded-lg mb-2" placeholder="Write announcement..."></textarea>
          <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700">Post</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;