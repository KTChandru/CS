import React, { useState } from 'react';
import './styles.css'; // Import CSS file for styling

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('SignUp:', { email, password, role });
    // Redirect or show a success message as needed
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
