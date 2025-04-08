// app/dashboard/[username]/page.jsx
import AdminDashboard from '@/components/AdminDashboard';
import StudentDashboard from '@/components/StudentDashboard';
import TeacherDashboard from '@/components/Teacher';
import User from '@/models/User'; // Make sure DB is connected
import React from 'react';

const Dashboard = async ({ params }) => {
  const user = await User.findOne({ username: params.username });
  console.log(`userRoleHere ---> ${user?.role.toUpperCase()} 😄 `);
  

  if (!user) {
    return <div>User not found</div>
  }

  switch (user.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'student':
      return <StudentDashboard />;
    case 'teacher':
      return <TeacherDashboard />;
    default:
      return <div>Invalid role</div>;
  }
};

export default Dashboard;
