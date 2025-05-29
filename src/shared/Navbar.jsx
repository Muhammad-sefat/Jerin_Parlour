import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#E5E5E5] p-4 shadow-md w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center w-full px-6">
        {/* Logo */}
        <div className="text-pink-600 font-bold font-serif tracking-wide">
          <img className="w-26" src={logo} alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to={"/"}>
            <p className="text-black text-[15px]">Home</p>
          </Link>
          <Link to={"/portfolio"}>
            <p className="text-black  text-[15px]"> Our Portfolio</p>
          </Link>
          <Link to={"/team"}>
            <p className="text-black text-[15px]"> Our Team</p>
          </Link>
          <Link to={"/contact"}>
            <p className="text-black text-[15px]">Contact Us</p>
          </Link>

          <Link to={"/login"}>
            <p className="text-white px-5 py-2 white text-[15px] rounded-full font-semibold bg-pink-600 transition duration-300">
              Login
            </p>
          </Link>
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
            onClick={toggleMenu}
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
