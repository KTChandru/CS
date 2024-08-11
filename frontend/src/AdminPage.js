import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

const API_URL_USERS = 'http://127.0.0.1:8080/api/users';
const API_URL_VEHICLES = 'http://127.0.0.1:8080/api/vehicles';
const API_URL_SHOPS = 'http://127.0.0.1:8080/api/shops';

function AdminPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('Statistics');
  const [users, setUsers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [shops, setShops] = useState([]);

  // User form state
  const [userForm, setUserForm] = useState({ user_id: '', name: '', email: '', password: '' });
  const [editUserMode, setEditUserMode] = useState(false);

  // Vehicle form state
  const [vehicleForm, setVehicleForm] = useState({ id: '', total_km: '', vehicle_number: '', vehicle_type: '', year_of_buying: '' });
  const [editVehicleMode, setEditVehicleMode] = useState(false);

  // Shop form state
  const [shopForm, setShopForm] = useState({ shop_id: '', name: '', address: '', city: '', pincode: '', phone: '' });
  const [editShopMode, setEditShopMode] = useState(false);

  useEffect(() => {
    fetchData(API_URL_USERS, setUsers);
    fetchData(API_URL_VEHICLES, setVehicles);
    fetchData(API_URL_SHOPS, setShops);
  }, []);

  const fetchData = async (url, setState) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setState(result);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  // User form handlers
  const handleUserFormChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleUserSave = async () => {
    const method = editUserMode ? 'PUT' : 'POST';
    const url = editUserMode ? `${API_URL_USERS}/${userForm.user_id}` : API_URL_USERS;
    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userForm),
      });
      const result = await response.json();
      
      if (response.ok) {
        if (editUserMode) {
          setUsers(users.map(user => user.user_id === userForm.user_id ? result : user));
        } else {
          setUsers([...users, result]);
        }
        setEditUserMode(false);
        setUserForm({ user_id: '', name: '', email: '', password: '' });
      } else {
        console.error('Failed to save user:', result);
      }
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleUserEdit = (user) => {
    setUserForm(user);
    setEditUserMode(true);
    setActiveSection('Users');
  };

  const handleUserDelete = async (user_id) => {
    try {
      const response = await fetch(`${API_URL_USERS}/${user_id}`, { method: 'DELETE' });
      if (response.ok) {
        setUsers(users.filter(user => user.user_id !== user_id));
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Vehicle form handlers
  const handleVehicleFormChange = (e) => {
    const { name, value } = e.target;
    setVehicleForm({ ...vehicleForm, [name]: value });
  };

  const handleVehicleSave = async () => {
    const method = editVehicleMode ? 'PUT' : 'POST';
    const url = editVehicleMode ? `${API_URL_VEHICLES}/${vehicleForm.id}` : API_URL_VEHICLES;
    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vehicleForm),
      });
      const result = await response.json();
      
      if (response.ok) {
        if (editVehicleMode) {
          setVehicles(vehicles.map(vehicle => vehicle.id === vehicleForm.id ? result : vehicle));
        } else {
          setVehicles([...vehicles, result]);
        }
        setEditVehicleMode(false);
        setVehicleForm({ id: '', total_km: '', vehicle_number: '', vehicle_type: '', year_of_buying: '' });
      } else {
        console.error('Failed to save vehicle:', result);
      }
    } catch (error) {
      console.error('Error saving vehicle:', error);
    }
  };

  const handleVehicleEdit = (vehicle) => {
    setVehicleForm(vehicle);
    setEditVehicleMode(true);
    setActiveSection('Vehicles');
  };

  const handleVehicleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL_VEHICLES}/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
      } else {
        console.error('Failed to delete vehicle');
      }
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  // Shop form handlers
  const handleShopFormChange = (e) => {
    const { name, value } = e.target;
    setShopForm({ ...shopForm, [name]: value });
  };

  const handleShopSave = async () => {
    const method = editShopMode ? 'PUT' : 'POST';
    const url = editShopMode ? `${API_URL_SHOPS}/${shopForm.shop_id}` : API_URL_SHOPS;
    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shopForm),
      });
      const result = await response.json();
      
      if (response.ok) {
        if (editShopMode) {
          setShops(shops.map(shop => shop.shop_id === shopForm.shop_id ? result : shop));
        } else {
          setShops([...shops, result]);
        }
        setEditShopMode(false);
        setShopForm({ shop_id: '', name: '', address: '', city: '', pincode: '', phone: '' });
      } else {
        console.error('Failed to save shop:', result);
      }
    } catch (error) {
      console.error('Error saving shop:', error);
    }
  };

  const handleShopEdit = (shop) => {
    setShopForm(shop);
    setEditShopMode(true);
    setActiveSection('Shops');
  };

  const handleShopDelete = async (shop_id) => {
    try {
      const response = await fetch(`${API_URL_SHOPS}/${shop_id}`, { method: 'DELETE' });
      if (response.ok) {
        setShops(shops.filter(shop => shop.shop_id !== shop_id));
      } else {
        console.error('Failed to delete shop');
      }
    } catch (error) {
      console.error('Error deleting shop:', error);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-content">
        <nav className="sidebar">
          <h2>Admin Dashboard</h2>
          <ul>
            <li onClick={() => setActiveSection('Statistics')}>Statistics</li>
            <li onClick={() => setActiveSection('Users')}>Users</li>
            <li onClick={() => setActiveSection('Vehicles')}>Vehicles</li>
            <li onClick={() => setActiveSection('Shops')}>Shops</li>
          </ul>
        </nav>
        <div className="admin-main">
          {activeSection === 'Statistics' && <div><h2>Statistics Overview</h2></div>}

          {activeSection === 'Users' && (
            <div>
              <h2>Manage Users</h2>
              <div className="form-container">
                <h3>{editUserMode ? 'Edit User' : 'Add New User'}</h3>
                <form>
                  <input
                    type="hidden"
                    name="user_id"
                    value={userForm.user_id}
                  />
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={userForm.name}
                    onChange={handleUserFormChange}
                    required
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={userForm.email}
                    onChange={handleUserFormChange}
                    required
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={userForm.password}
                    onChange={handleUserFormChange}
                    required
                  />
                  <button type="button" className="add-button" onClick={handleUserSave}>
                    {editUserMode ? 'Update' : 'Add'}
                  </button>
                </form>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.user_id}>
                        <td>{user.user_id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                          <button className="action-button" onClick={() => handleUserEdit(user)}>Edit</button>
                          <button className="action-button" onClick={() => handleUserDelete(user.user_id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSection === 'Vehicles' && (
            <div>
              <h2>Manage Vehicles</h2>
              <div className="form-container">
                <h3>{editVehicleMode ? 'Edit Vehicle' : 'Add New Vehicle'}</h3>
                <form>
                  <input
                    type="hidden"
                    name="id"
                    value={vehicleForm.id}
                  />
                  <label htmlFor="total_km">Total KM:</label>
                  <input
                    type="text"
                    name="total_km"
                    value={vehicleForm.total_km}
                    onChange={handleVehicleFormChange}
                    required
                  />
                  <label htmlFor="vehicle_number">Vehicle Number:</label>
                  <input
                    type="text"
                    name="vehicle_number"
                    value={vehicleForm.vehicle_number}
                    onChange={handleVehicleFormChange}
                    required
                  />
                  <label htmlFor="vehicle_type">Vehicle Type:</label>
                  <input
                    type="text"
                    name="vehicle_type"
                    value={vehicleForm.vehicle_type}
                    onChange={handleVehicleFormChange}
                    required
                  />
                  <label htmlFor="year_of_buying">Year of Buying:</label>
                  <input
                    type="text"
                    name="year_of_buying"
                    value={vehicleForm.year_of_buying}
                    onChange={handleVehicleFormChange}
                    required
                  />
                  <button type="button" className="add-button" onClick={handleVehicleSave}>
                    {editVehicleMode ? 'Update' : 'Add'}
                  </button>
                </form>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Total KM</th>
                      <th>Vehicle Number</th>
                      <th>Vehicle Type</th>
                      <th>Year of Buying</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicles.map(vehicle => (
                      <tr key={vehicle.id}>
                        <td>{vehicle.id}</td>
                        <td>{vehicle.total_km}</td>
                        <td>{vehicle.vehicle_number}</td>
                        <td>{vehicle.vehicle_type}</td>
                        <td>{vehicle.year_of_buying}</td>
                        <td>
                          <button className="action-button" onClick={() => handleVehicleEdit(vehicle)}>Edit</button>
                          <button className="action-button" onClick={() => handleVehicleDelete(vehicle.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSection === 'Shops' && (
            <div>
              <h2>Manage Shops</h2>
              <div className="form-container">
                <h3>{editShopMode ? 'Edit Shop' : 'Add New Shop'}</h3>
                <form>
                  <input
                    type="hidden"
                    name="shop_id"
                    value={shopForm.shop_id}
                  />
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={shopForm.name}
                    onChange={handleShopFormChange}
                    required
                  />
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={shopForm.address}
                    onChange={handleShopFormChange}
                    required
                  />
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    name="city"
                    value={shopForm.city}
                    onChange={handleShopFormChange}
                    required
                  />
                  <label htmlFor="pincode">Pincode:</label>
                  <input
                    type="text"
                    name="pincode"
                    value={shopForm.pincode}
                    onChange={handleShopFormChange}
                    required
                  />
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={shopForm.phone}
                    onChange={handleShopFormChange}
                    required
                  />
                  <button type="button" className="add-button" onClick={handleShopSave}>
                    {editShopMode ? 'Update' : 'Add'}
                  </button>
                </form>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Shop ID</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>Pincode</th>
                      <th>Phone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shops.map(shop => (
                      <tr key={shop.shop_id}>
                        <td>{shop.shop_id}</td>
                        <td>{shop.name}</td>
                        <td>{shop.address}</td>
                        <td>{shop.city}</td>
                        <td>{shop.pincode}</td>
                        <td>{shop.phone}</td>
                        <td>
                          <button className="action-button" onClick={() => handleShopEdit(shop)}>Edit</button>
                          <button className="action-button" onClick={() => handleShopDelete(shop.shop_id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
