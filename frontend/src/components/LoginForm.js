// src/pages/StudentLoginPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function StudentLoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    // Placeholder for actual authentication logic
    if (credentials.username && credentials.password) {
      // Example: Redirect to Student Dashboard on successful login
      history.push('/student-dashboard');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default StudentLoginPage;
