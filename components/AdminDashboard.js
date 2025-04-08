// pages/admin-dashboard.js
"use client";
import { useSession, signIn , signOut } from "next-auth/react";
import React from "react";

const AdminDashboard = () => {
  const { data: session } = useSession();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-6 text-white">
      <nav className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-4 mb-6">
        <h1 className="text-3xl font-extrabold">Admin Dashboard</h1>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div className="flex items-center gap-4">
          <div className="border-2 size-20 rounded-full cursor-pointer overflow-hidden text-sm  border-current *:selection:bg-transparent">
              <img
                src={session?.user?.image || "./avatar.png"}
                alt="Profile"
                className=" object-cover"
              />
            </div>
            <div>
              <p className="text-lg">Admin Name</p>
              <p className="text-gray-300">admin@example.com</p>
              <button className="mt-2 px-3 py-1 bg-red-500 rounded-full text-sm hover:bg-red-600">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        {/* User Management */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="text-gray-300">Name</th>
                <th className="text-gray-300">Role</th>
                <th className="text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-gray-200">Mohd Anas</td>
                <td className="text-gray-200">Student</td>
                <td>
                  <select className="bg-gray-700 text-white p-1 rounded">
                    <option>Student</option>
                    <option>Teacher</option>
                    <option>Admin</option>
                  </select>
                  <button className="ml-2 text-red-400">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="text-gray-200">Teacher Name</td>
                <td className="text-gray-200">Teacher</td>
                <td>
                  <select className="bg-gray-700 text-white p-1 rounded">
                    <option>Teacher</option>
                    <option>Student</option>
                    <option>Admin</option>
                  </select>
                  <button className="ml-2 text-red-400">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Course Management */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Course Management</h2>
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
            Add Course
          </button>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-200">
              Web Development{" "}
              <button className="ml-2 text-red-400">Delete</button>
            </li>
            <li className="text-gray-200">
              Data Science <button className="ml-2 text-red-400">Delete</button>
            </li>
          </ul>
        </div>
        {/* Analytics */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <p className="text-gray-200">Total Students: 120</p>
          <p className="text-gray-200">Total Teachers: 12</p>
          <p className="text-gray-200">Total Courses: 25</p>
          <div className="w-full bg-gray-700 h-32 rounded-lg mt-4"></div>{" "}
          {/* Simulated Chart */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
