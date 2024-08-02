import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Welcome to the Student Management System</h2>
      <Link to="/student-login">Student Login</Link>
      <br />
      <Link to="/teacher-login">Teacher Login</Link>
      <br />
      <Link to="/student-dashboard">Student Dashboard</Link> {/* Added link to Student Dashboard */}
    </div>
  );
}

export default HomePage;