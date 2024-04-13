import React, { useState } from 'react';
import './CompanyLogin.css';

function CompanyLogin() {
  const [uniqueId, setUniqueId] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP request to your Express server
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uniqueId, password })
      });

      // Handle the response as needed
      const data = await response.json();
      console.log(data); // Log the response for debugging

      // Clear form fields after submission
      setUniqueId('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="parent">
      <div className="company-login-container">
        <h2>Company Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="unique-id">Unique ID:</label>
            <input
              type="text"
              id="unique-id"
              name="unique-id"
              value={uniqueId}
              onChange={(e) => setUniqueId(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default CompanyLogin;