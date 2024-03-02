import React, { useState } from 'react';
import './LoginForm.css'; // Make sure the path to your CSS file is correct
// Importing the logos
import Layer1Logo from '../asserts/Layer_1.svg'; // Adjust the path as necessary
import RealEstateLogo from '../asserts/REAL ESTATE.svg'; // Adjust the path as necessary

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log(username, password);
    
  };

  return (
    <div className="login-container">
      <div className="login-header">
        {/* Use the imported logos here */}
        <img src={Layer1Logo} alt="Layer Logo" className="login-logo" />
        <img src={RealEstateLogo} alt="Real Estate Logo" className="login-logo" />
        <div className="hr-divider"></div> {/* Updated line */}
        <h2 className='title'>Log In to Admin Panel</h2>
        <p className="login-subtitle">Enter your user name and password below</p>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="username" className="input-label">User Name</label>
        <input
          type="text"
          placeholder="User Name"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
          <label htmlFor="password" className="input-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="login-button">LOG IN</button>
      </form>
    </div>
  );
};

export default LoginForm;
