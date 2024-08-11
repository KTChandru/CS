    // src/pages/LocalServiceShop.js
    import React, { useState } from 'react';

    const shops = [
    { id: 1, name: 'AutoFix', address: '123 Main St', city: 'covaiputhur', distance: 2 },
    { id: 2, name: 'Quick Repair', address: '456 Elm St', city: 'mettur', distance: 5 },
    { id: 3, name: 'Car Care Center', address: '789 Oak St', city: 'salem', distance: 8 },
    { id: 4, name: 'Auto Solutions', address: '101 Maple St', city: 'coimbatore', distance: 10 },
    // Add more shops as needed
    ];

    function LocalServiceShop() {
    const [location, setLocation] = useState('');
    const [nearbyShops, setNearbyShops] = useState([]);

    const handleLocationChange = (e) => {
    setLocation(e.target.value);
    };

    const findShops = () => {
    // Simulate fetching nearby shops based on the user's input location
    setNearbyShops(shops.filter(shop => shop.city.toLowerCase().includes(location.toLowerCase())));
    };

    return (
    <div className="local-service-shop">
        <h2>Find a Local Service Shop</h2>
        <input
        type="text"
        placeholder="Enter your city"
        value={location}
        onChange={handleLocationChange}
        className="location-input"
        />
        <button onClick={findShops}>Find Shops</button>
        {nearbyShops.length > 0 ? (
        <div>
            <h3>Nearby Shops</h3>
            <ul>
            {nearbyShops.map(shop => (
                <li key={shop.id}>
                <h4>{shop.name}</h4>
                <p>{shop.address}, {shop.city}</p>
                <p>Distance: {shop.distance} km</p>
                </li>
            ))}
            </ul>
        </div>
        ) : (
        <p>No shops found for the entered location.</p>
        )}
    </div>
    );
    }

    export default LocalServiceShop;