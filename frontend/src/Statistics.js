    import React, { useEffect, useState } from 'react';
import './Statistics.css'; // Import CSS for styling

    function Statistics() {
    const [data, setData] = useState({
    users: 0,
    vehicles: 0,
    shops: 0,
    });

    useEffect(() => {
        // Mock data
        const mockData = {
            users: 100,
            vehicles: 50,
            shops: 20,
        };
        setData(mockData);
        }, []);
        

    return (
    <div className="statistics-container">
        <div className="stat-card">
        <h2>{data.users}</h2>
        <p>Users</p>
        </div>
        <div className="stat-card">
        <h2>{data.vehicles}</h2>
        <p>Vehicles</p>
        </div>
        <div className="stat-card">
        <h2>{data.shops}</h2>
        <p>Shops</p>
        </div>
    </div>
    );
    }

    export default Statistics;
