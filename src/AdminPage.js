import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './AdminPage.css';
import Reports from './Reports';
import Shops from './Shops';
import Sidebar from './Sidebar';
import Statistics from './Statistics'; // Import Statistics component
import Users from './Users';
import Vehicles from './Vehicles';

function AdminPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      <div className="admin-content">
        <Sidebar />
        <div className="admin-main">
          <Routes>
            <Route path="/" element={<Statistics />} />
            <Route path="users" element={<Users />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="shops" element={<Shops />} />
            <Route path="reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
