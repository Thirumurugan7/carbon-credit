import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 to-blue-900 text-white p-6 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold">Carbon Exchange</div>

      {/* Navigation Items */}
      <ul className="flex space-x-6">
        <li>
          <a
            href="#"
            className="bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300"
          >
            Resources
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-md transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Get Started Button */}
      <Link
        to="/dashboard"
        className="bg-orange-400 text-purple-900 px-5 py-2 rounded-lg text-lg font-semibold transform transition duration-300 hover:scale-105 hover:bg-orange-500"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
