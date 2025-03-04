import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './logoutbutton';
import './NavBar.css';

function Navbar() {
  const role = localStorage.getItem('role'); // Get user role
  const isLoggedIn = localStorage.getItem('token'); // Check login status

  return (
    <nav className="navbar">
      {/* Course List is the landing page, so it's always visible */}

      <Link to="/courselist">Course List</Link>

      {/* Show Student and Teacher pages only if logged in */}
      {isLoggedIn && (
        <>
          {role === 'teacher' && (
            <>
              <Link to="/addcourse">Add A Course</Link>
              <Link to="/editcourse">Edit Course</Link>
              <Link to="/dashboard">Dashboard</Link>
            </>
          )}
          {role === 'student' && (
            <>
              <Link to="/myschedule">My Schedule</Link>
            </>
          )}
        </>
      )}

      {/* Show login if not logged in, otherwise show logout */}
      {isLoggedIn ? <LogoutButton /> : <Link to="/login">Login</Link>}
    </nav>
  );
}

export default Navbar;
