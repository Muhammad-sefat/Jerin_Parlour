import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import { useAuth } from "../provider/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFF8F5] p-4 border-b w-full fixed top-0 z-50">
      <div className="flex justify-between items-center w-full px-16">
        {/* Logo */}
        <div className="text-[#f73d7b] font-bold font-serif tracking-wide">
          <Link to={"/"}>
            <img className="w-26" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to={"/"}>
            <p className="text-black text-[15px] font-medium hover:text-[#f73d7b] hover:font-semibold transition">
              Home
            </p>
          </Link>
          <Link to={"/portfolio"}>
            <p className="text-black  text-[15px] font-medium hover:text-[#f73d7b] hover:font-semibold transition">
              {" "}
              Our Portfolio
            </p>
          </Link>
          <Link to={"/team"}>
            <p className="text-black text-[15px] font-medium hover:text-[#f73d7b] hover:font-semibold transition">
              {" "}
              Our Team
            </p>
          </Link>
          <Link to={"/contact"}>
            <p className="text-black text-[15px] font-medium hover:text-[#f73d7b] hover:font-semibold transition">
              Contact Us
            </p>
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={
                  user.photo || "https://i.ibb.co/Z6XP9y6t/user-16782527.png"
                }
                alt="User"
                className="w-12 h-12 rounded-full cursor-pointer border border-gray-300"
                onClick={() => setOpenDropdown((prev) => !prev)}
              />

              {openDropdown && (
                <div className="absolute right-3 top-18 bg-white border rounded-lg shadow-md w-36 z-50">
                  <ul className="text-sm text-gray-700 font-medium">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li
                      onClick={logout}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#f73d7b]"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="text-white px-5 py-2 text-[15px] rounded-full font-semibold bg-[#f73d7b] hover:bg-[#e22c6b] transition">
                Login
              </button>
            </Link>
          )}
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
          <button
            href="#"
            className="block bg-white text-[#f73d7b] px-4 py-2 rounded-full font-semibold mt-4 text-center hover:bg-gray-200 transition duration-300 shadow"
            onClick={toggleMenu}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
