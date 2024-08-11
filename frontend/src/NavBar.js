import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cs1 from './images/cs1.jpg';
import './styles.css'; // Import CSS file for styling
function NavBar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={cs1} alt="Company Logo" className="navbar-logo" /> {/* Update with your logo path */}
        <input type="text" className="navbar-search" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          {!user ? (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          ) : user.role === 'admin' ? (
            <>
              <li><Link to="/admin">Admin Page</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
            </>
          )}
          {user && (
            <>
              <li>
                {user.name} ({user.role})
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
