import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ loginText = 'Login', onLoginClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Services'];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = (e, item) => {
    e.preventDefault();
    switch (item) {
      case 'About':
        scrollToSection('hero');
        break;
      case 'Services':
        scrollToSection('services');
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    onLoginClick ? onLoginClick() : scrollToSection('form');
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link  className="text-3xl font-extrabold font-serif text-white tracking-wide">
          Amil s'
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item}
              to="/"
              onClick={(e) => handleClick(e, item)}
              className="hover:text-white transition duration-200"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={handleLoginClick}
            className={`ml-4 px-4 py-2 rounded transition duration-200 text-sm font-semibold ${
              loginText === 'Logout'
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'text-blue-600 border border-white hover:bg-white hover:text-white'
            }`}
          >
            {loginText}
          </button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 text-lg text-gray-700 space-y-4 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item}
              to="/"
              onClick={(e) => handleClick(e, item)}
              className="block hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={handleLoginClick}
            className={`w-full text-left px-4 py-2 rounded-md transition duration-200 ${
              loginText === 'Logout'
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            {loginText}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
