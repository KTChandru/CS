// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import CSS file for styling

const sampleUsers = [
  { email: 'user@example.com', password: 'userpass', role: 'user', name: 'User' },
  { email: 'admin@example.com', password: 'adminpass', role: 'admin', name: 'Admin' }
];

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = sampleUsers.find(
      u => u.email === email && u.password === password && u.role === role
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Login:', user);

      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="role-toggle">
            <button
              type="button"
              className={role === 'user' ? 'active' : ''}
              onClick={() => setRole('user')}
            >
              User
            </button>
            <button
              type="button"
              className={role === 'admin' ? 'active' : ''}
              onClick={() => setRole('admin')}
            >
              Admin
            </button>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
