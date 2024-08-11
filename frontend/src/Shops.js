import React, { useState } from 'react';
import './Shops.css';

const initialShops = [
{ shopId: 'S001', type: 'Bike', location: '123 Main St', city: 'New York' },
{ shopId: 'S002', type: 'Car', location: '456 Elm St', city: 'Los Angeles' },
];

function Shops() {
const [shops, setShops] = useState(initialShops);

const handleAddShop = () => {
const shopId = prompt('Enter shop ID:');
const type = prompt('Enter shop type (Bike/Car/Both):');
const location = prompt('Enter shop location:');
const city = prompt('Enter shop city:');
setShops([...shops, { shopId, type, location, city }]);
};

const handleRemoveShop = (shopId) => {
if (window.confirm('Are you sure you want to remove this shop?')) {
    setShops(shops.filter(shop => shop.shopId !== shopId));
}
};

return (
<div className="admin-page">
    <h1>Shops</h1>
    <button className="add-button" onClick={handleAddShop}>Add Shop</button>
    <table className="admin-table">
    <thead>
        <tr>
        <th>Shop ID</th>
        <th>Type</th>
        <th>Location</th>
        <th>City</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {shops.map(shop => (
        <tr key={shop.shopId}>
            <td>{shop.shopId}</td>
            <td>{shop.type}</td>
            <td>{shop.location}</td>
            <td>{shop.city}</td>
            <td>
            <button className="delete-button" onClick={() => handleRemoveShop(shop.shopId)}>Delete</button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
</div>
);
}

export default Shops;
