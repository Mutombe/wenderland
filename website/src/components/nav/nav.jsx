import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/process', label: 'Our Process' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white fixed w-full z-50 shadow-xl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold flex items-center hover:text-blue-200 transition-all duration-300"
        >
          <Car className="mr-2 w-8 h-8 text-blue-300" />
          <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Wonderland
          </span>
        </Link>

        <button 
          className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" />
          )}
        </button>

        <div className={`
          fixed inset-0 bg-gradient-to-b from-blue-800 to-blue-600 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:static md:translate-x-0 md:bg-transparent
          md:flex md:items-center md:space-x-4
        `}>
          <button 
            className="md:hidden absolute top-6 right-6 focus:outline-none p-2 rounded-full hover:bg-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-7 h-7 text-white" />
          </button>

          <div className="flex flex-col md:flex-row items-center justify-center h-full space-y-8 md:space-y-0 md:space-x-6 text-center pt-20 md:pt-0">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  block px-6 py-3 text-xl md:text-lg
                  transition-all duration-300 ease-in-out
                  ${location.pathname === item.path 
                    ? 'bg-blue-700 md:bg-transparent md:border-b-2 border-blue-300 text-white rounded-xl' 
                    : 'hover:bg-blue-700/50 text-blue-100 hover:text-white rounded-xl'}
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
