    import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import CSS for styling

    function Sidebar() {
    return (
    <div className="sidebar">
        <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
        <NavLink to="/admin" end className="nav-link">
            <div className="nav-item">Dashboard</div>
        </NavLink>
        <NavLink to="/admin/users" className="nav-link">
            <div className="nav-item">Users</div>
        </NavLink>
        <NavLink to="/admin/vehicles" className="nav-link">
            <div className="nav-item">Vehicles</div>
        </NavLink>
        <NavLink to="/admin/shops" className="nav-link">
            <div className="nav-item">Shops</div>
        </NavLink>
        <NavLink to="/admin/reports" className="nav-link">
            <div className="nav-item">Reports</div>
        </NavLink>
        </nav>
    </div>
    );
    }

    export default Sidebar;
