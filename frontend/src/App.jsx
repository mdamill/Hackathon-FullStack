import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Form from './pages/Form';
import DataTable from './pages/DataTable';
import Home from './pages/Home';

function App() {
  const navigate = useNavigate();

  // Initialize state from localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem('token') || null);

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
    navigate('/');
  };

  return (
    <Routes>

      <Route path="/" element={<Form setUser={setUser} setToken={setToken} />} />

      <Route
        path="/home"
        element={
          token && user ? (
            <Home logout={logout} user={user}/>
          ) : (
            <p style={{ padding: '20px', color: 'red' }}>PLS LOGIN</p>
          )
        }
      />

      <Route
        path="/data"
        element={
          token && user ? (
            <DataTable user={user} logout={logout} />
          ) : (
            <p style={{ padding: '20px', color: 'red' }}>PLS LOGIN</p>
          )
        }
      />
      
    </Routes>
  );
}

export default App;
