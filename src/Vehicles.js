    import React, { useState } from 'react';
import './Vehicles.css';

    const initialVehicles = [
    { email: 'john@example.com', vehicleNumber: 'ABC123', vehicleType: 'Bike', brand: 'Yamaha', model: 'MT-07' },
    { email: 'jane@example.com', vehicleNumber: 'XYZ789', vehicleType: 'Car', brand: 'Toyota', model: 'Corolla' },
    ];

    function Vehicles() {
    const [vehicles, setVehicles] = useState(initialVehicles);

    const handleAddVehicle = () => {
    const email = prompt('Enter user email:');
    const vehicleNumber = prompt('Enter vehicle number:');
    const vehicleType = prompt('Enter vehicle type (Bike/Car):');
    const brand = prompt('Enter vehicle brand:');
    const model = prompt('Enter vehicle model:');
    setVehicles([...vehicles, { email, vehicleNumber, vehicleType, brand, model }]);
    };

    const handleRemoveVehicle = (vehicleNumber) => {
    if (window.confirm('Are you sure you want to remove this vehicle?')) {
        setVehicles(vehicles.filter(vehicle => vehicle.vehicleNumber !== vehicleNumber));
    }
    };

    return (
    <div className="admin-page">
        <h1>Vehicles</h1>
        <button className="add-button" onClick={handleAddVehicle}>Add Vehicle</button>
        <table className="admin-table">
        <thead>
            <tr>
            <th>Email</th>
            <th>Vehicle Number</th>
            <th>Type</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {vehicles.map(vehicle => (
            <tr key={vehicle.vehicleNumber}>
                <td>{vehicle.email}</td>
                <td>{vehicle.vehicleNumber}</td>
                <td>{vehicle.vehicleType}</td>
                <td>{vehicle.brand}</td>
                <td>{vehicle.model}</td>
                <td>
                <button className="delete-button" onClick={() => handleRemoveVehicle(vehicle.vehicleNumber)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
    }

    export default Vehicles;
