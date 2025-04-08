"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const StudentDashboard = () => {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("overview");

  const studentData = {
    name: "Mohd Anas",
    email: "anas@example.com",
    role: "Student",
    courses: [
      { name: "Web Development", progress: 70, grade: "A" },
      { name: "Data Science", progress: 45, grade: "B+" },
    ],
    assignments: [
      { title: "Build a Portfolio", dueDate: "2025-04-10", status: "pending" },
      { title: "Data Analysis", dueDate: "2025-04-15", status: "pending" },
    ],
    notifications: [
      { message: "New course available: AI Basics", type: "info" },
      { message: "Assignment 1 graded: A+", type: "success" },
    ],
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          Hello,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            {studentData.name}
          </span>
        </h1>
        <p className="text-gray-300 mt-2 text-lg sm:text-xl font-medium">
          Your Academic Dashboard
        </p>
      </header>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        {["overview", "courses", "assignments"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full cursor-pointer font-medium text-sm sm:text-base transition-all duration-300 ${
              activeTab === tab
                ? "bg-indigo-600 text-white shadow-md"
                : "text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <section className="bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-gray-800/50 hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-white">Profile</h2>
            <div className="flex items-center gap-5">
              <div className="size-20 sm:size-24 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src={session?.user?.image || "./avatar.png"}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-2">
                <p className="text-white font-medium text-lg sm:text-xl">
                  {studentData.email}
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  {studentData.role}
                </p>
              </div>
            </div>
            <button className="mt-6 w-full py-2.5 cursor-pointer bg-indigo-600 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-indigo-700 hover:shadow-md transition-all duration-300">
              Edit Profile
            </button>
          </section>
        </div>

        {/* Dynamic Content */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === "overview" && (
            <>
              {/* Quick Stats */}
              <section className="bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-gray-800/50 hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-6 text-white">
                  Quick Stats
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800/70 rounded-xl shadow-sm">
                    <p className="text-3xl font-bold text-indigo-400">
                      {studentData.courses.length}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">Active Courses</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800/70 rounded-xl shadow-sm">
                    <p className="text-3xl font-bold text-indigo-400">
                      {studentData.assignments.length}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">Pending Tasks</p>
                  </div>
                </div>
              </section>

              {/* Notifications */}
              <section className="bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-gray-800/50 hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-6 text-white flex items-center justify-between">
                  Notifications
                  <span className="bg-indigo-600 text-white text-xs font-medium rounded-full px-2 py-1">
                    {studentData.notifications.length}
                  </span>
                </h2>
                <ul className="space-y-3">
                  {studentData.notifications.map((notif, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm bg-gray-800/70 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <span
                        className={
                          notif.type === "success"
                            ? "text-green-400"
                            : "text-indigo-400"
                        }
                      >
                        {notif.type === "success" ? "✓" : "i"}
                      </span>
                      <span className="text-gray-300">{notif.message}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {activeTab === "courses" && (
            <section className="bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-gray-800/50 hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Enrolled Courses
              </h2>
              <div className="space-y-4">
                {studentData.courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/70 p-4 rounded-xl hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-white font-medium text-lg">
                          {course.name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          Grade: {course.grade}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <span className="text-indigo-400 text-sm font-medium bg-indigo-900/40 px-3 py-1 rounded-full">
                          {course.progress}%
                        </span>
                        <div className="w-full sm:w-36 bg-gray-700/50 rounded-full h-2.5">
                          <div
                            className="bg-indigo-500 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "assignments" && (
            <section className="bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-gray-800/50 hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Assignments
              </h2>
              <div className="space-y-4">
                {studentData.assignments.map((assignment, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/70 p-4 rounded-xl hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="text-white font-medium text-lg">
                        {assignment.title}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-red-400 text-sm font-medium bg-red-900/40 px-3 py-1 rounded-full">
                          Due: {assignment.dueDate}
                        </span>
                        <button className="px-4 py-2 cursor-pointer bg-green-500 text-white rounded-lg font-medium text-sm hover:bg-green-600 hover:shadow-md transition-all duration-300">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;