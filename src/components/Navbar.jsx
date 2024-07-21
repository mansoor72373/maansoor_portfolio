import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex bg-gray-800 text-white items-center justify-between px-4 py-3 fixed top-0 w-full z-10">
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

      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className={`md:hidden w-14 ml-4 mt-2 top-4 left-4 p-4 bg-gray-700 text-white text-2xl z-20 ${isSidebarOpen ? "hidden" : "block"}`}
        aria-label="Open sidebar"
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="flex items-center p-4 border-b border-gray-700">
          <div className="text-xl font-bold flex-grow">My Portfolio</div>
          <button onClick={toggleSidebar} className="text-white text-2xl" aria-label="Close sidebar">
            &times;
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
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
      </div>
    </>
  );
};

export default Navbar;
