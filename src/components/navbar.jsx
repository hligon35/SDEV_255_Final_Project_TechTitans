import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Course List</Link>
      <Link to="/addcourse">Add A Course</Link>
      <Link to="/teacherpage">Instructor Login</Link>
      <Link to="/studentpage">Student Login</Link>
    </nav>
  );
}

export default Navbar;