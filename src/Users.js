    import React, { useState } from 'react';
import './Users.css';

    const initialUsers = [
    { name: 'John Doe', email: 'john@example.com', vehicleType: 'Bike' },
    { name: 'Jane Smith', email: 'jane@example.com', vehicleType: 'Car' },
    ];

    function Users() {
    const [users, setUsers] = useState(initialUsers);

    const handleAddUser = () => {
    const name = prompt('Enter user name:');
    const email = prompt('Enter user email:');
    const vehicleType = prompt('Enter vehicle type (Bike/Car):');
    setUsers([...users, { name, email, vehicleType }]);
    };

    const handleRemoveUser = (email) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
        setUsers(users.filter(user => user.email !== email));
    }
    };

    return (
    <div className="admin-page">
        <h1>Users</h1>
        <button className="add-button" onClick={handleAddUser}>Add User</button>
        <table className="admin-table">
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Vehicle Type</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
            <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.vehicleType}</td>
                <td>
                <button className="delete-button" onClick={() => handleRemoveUser(user.email)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
    }

    export default Users;
