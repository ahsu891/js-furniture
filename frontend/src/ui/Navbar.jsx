import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
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
      className={`sticky top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white border border-cyan-50 '
      }`}
    >
      <div className="flex-nowrap flex items-center justify-between p-4 px-7 h-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Logo</Link> {/* Updated with Link */}
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
        <div className="flex items-center space-x-4 background-blur">
          {/* Menu Links for larger screens */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="relative group text-gray-800 hover:text-orange-500 transition-colors duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link
              to="/shop"
              className="relative group text-gray-800 hover:text-orange-500 transition-colors duration-300"
            >
              Shop
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative group text-gray-800 hover:text-orange-500 transition-colors duration-300"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="relative group text-gray-800 hover:text-orange-500 transition-colors duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Cart and Profile Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-800 hover:text-orange-500 transition-colors duration-300">
              <FaShoppingCart size={24} />
            </Link>
            <Link to="/profile" className="text-gray-800 hover:text-orange-500 transition-colors duration-300">
              <FaUser size={24} />
            </Link>
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
          <Link to="/" className="block py-2 text-sm text-gray-800 hover:text-orange-500">
            Home
          </Link>
          <Link to="/shop" className="block py-2 text-sm text-gray-800 hover:text-orange-500">
            Shop
          </Link>
          <Link to="/about" className="block py-2 text-sm text-gray-800 hover:text-orange-500">
            About
          </Link>
          <Link to="/contact" className="block py-2 text-sm text-gray-800 hover:text-orange-500">
            Contact
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link to="/cart" className="hover:text-orange-500">
              <FaShoppingCart size={24} />
            </Link>
            <Link to="/profile" className="hover:text-orange-500">
              <FaUser size={24} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
