import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Menu" style={{ position: 'absolute', left: '609px', top: '30px', color: 'white', fontSize: '20px', fontFamily: 'Cabin', fontWeight: '600', lineHeight: '39.40px', letterSpacing: '2.30px', wordWrap: 'break-word' }}>
      <Link to="/student-login" style={{ color: 'white', textDecoration: 'none' }}>Student Login</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/teacher-login" style={{ color: 'white', textDecoration: 'none' }}>Teacher Login</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/student-dashboard" style={{ color: 'white', textDecoration: 'none' }}>Student Dashboard</Link> &nbsp;&nbsp;&nbsp;
    </nav>
  );
}

export default Navbar;