import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (


    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >

    {/* </nav> */}
    {/* // <nav className="bg-[white]  text-gray-800 shadow-md md:px-12  w-full"> */}
      <div className="container  flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">Logo</a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/3">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-2 rounded-md text-gray-700 border border-gray-300"
          />
        </div>

        {/* Navigation and Icons */}
        <div className="flex items-center space-x-4  background-blur">
          {/* Menu Links for larger screens */}
          <div className="hidden md:flex space-x-6">
            <a 
              href="#" 
              className="relative group text-white-800 hover:text-orange-500 transition-colors duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="relative group text-gray-800 hover:text-orange-500 transition-colors duration-300"
            >
              Shop
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="relative group text-gray-800 hover:text-orange-500 transition-colors duration-300"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="relative group text-gray-800 hover:text-orange-500 transition-colors duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </div>

          {/* Cart and Profile Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors duration-300">
              <FaShoppingCart size={24} />
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors duration-300">
              <FaUser size={24} />
            </a>
          </div>

          {/* Hamburger Menu Icon for mobile screens */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <a href="#" className="block py-2 text-sm text-gray-800 hover:text-orange-500">Home</a>
          <a href="#" className="block py-2 text-sm text-gray-800 hover:text-orange-500">Shop</a>
          <a href="#" className="block py-2 text-sm text-gray-800 hover:text-orange-500">About</a>
          <a href="#" className="block py-2 text-sm text-gray-800 hover:text-orange-500">Contact</a>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-orange-500">
              <FaShoppingCart size={24} />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaUser size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
