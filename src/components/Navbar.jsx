import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between px-4 py-3 fixed top-0 w-full z-10">
      <div className="text-xl font-bold">My Portfolio</div>
      <div className="flex space-x-4">
        <NavLink to="/" exact className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"}>
          Projects
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"}>
          Blog
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
