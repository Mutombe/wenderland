import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';

export const Navigation = () => {
  // State to manage mobile menu open/closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get current location to determine active tab
  const location = useLocation();

  // Navigation menu items with paths
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/process', label: 'Our Process' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-blue-600 text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link 
          to="/" 
          className="text-2xl font-bold flex items-center hover:text-blue-200 transition-colors"
        >
          <Car className="mr-2 w-8 h-8" /> 
          Wonderland
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Navigation Menu */}
        <div className={`
          fixed inset-0 bg-blue-600 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:static md:translate-x-0 md:bg-transparent
          md:flex md:items-center md:space-x-4
        `}>
          {/* Close Button for Mobile */}
          <button 
            className="md:hidden absolute top-4 right-4 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center justify-center h-full space-y-6 md:space-y-0 md:space-x-4 text-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  block px-4 py-3 text-xl md:text-base
                  transition-all duration-300 ease-in-out
                  ${location.pathname === item.path 
                    ? 'bg-blue-700 md:bg-transparent md:border-2 border-white text-white rounded-lg' 
                    : 'hover:bg-blue-500 text-blue-100 hover:text-white rounded-lg'}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};