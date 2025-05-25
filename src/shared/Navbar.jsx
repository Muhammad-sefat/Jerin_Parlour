// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon, install react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold font-serif tracking-wide">
          Jerin's Parlour
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Our Portfolio
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 transition duration-300"
          >
            Our Team
          </a>
          <a
            href="#"
            className="bg-white text-pink-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden bg-pink-600 mt-4 p-4 rounded-lg shadow-lg">
          <a
            href="#"
            className="block text-white px-4 py-2 hover:bg-pink-700 transition duration-300 rounded"
            onClick={toggleMenu} // Close menu on click
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white px-4 py-2 hover:bg-pink-700 transition duration-300 rounded"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
          <a
            href="#"
            className="block text-white px-4 py-2 hover:bg-pink-700 transition duration-300 rounded"
            onClick={toggleMenu}
          >
            Our Portfolio
          </a>
          <a
            href="#"
            className="block text-white px-4 py-2 hover:bg-pink-700 transition duration-300 rounded"
            onClick={toggleMenu}
          >
            Our Team
          </a>
          <a
            href="#"
            className="block bg-white text-pink-600 px-4 py-2 rounded-full font-semibold mt-4 text-center hover:bg-gray-200 transition duration-300 shadow"
            onClick={toggleMenu}
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
