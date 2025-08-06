import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form({ setUser, setToken }) {
  const [mode, setMode] = useState('signup'); // 'signup' or 'login'
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [ph, setPh] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

 const submithandler = async (e) => {
  e.preventDefault();
  try {
    let ans;
    if (mode === 'signup') {
      ans = await axios.post("http://localhost:8000/api/signup", {
        firstname,
        lastname,
        address,
        ph,
        password,
        email,
      });
      alert("Sign up done! Please login.");
      setMode('login'); // Switch to login mode after signup
      // Optionally clear signup fields here
    } else {
      ans = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      const dummyToken = 'token-1234567890';
      setUser(ans.data);
      setToken(dummyToken);
      localStorage.setItem('user', JSON.stringify(ans.data));
      localStorage.setItem('token', dummyToken);
      navigate('/home');
    }
  } catch (err) {
    alert("Submission error: " + (err.response?.data?.message || err.message));
    console.log("Submission error:", err);
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            className={`px-4 py-2 ${mode === 'signup' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-l`}
            onClick={() => setMode('signup')}
          >
            Sign Up
          </button>
          <button
            type="button"
            className={`px-4 py-2 ${mode === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-r`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {mode === 'signup' ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={submithandler} className="space-y-4">
          {mode === 'signup' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Enter your first name"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Enter your last name"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  value={ph}
                  onChange={(e) => setPh(e.target.value)}
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            {mode === 'signup' ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;