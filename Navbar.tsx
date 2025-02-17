import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="bg-[#003366] px-[6%] py-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={toggleDarkMode}
          className="text-white hover:text-[#ffcc00] transition-colors"
        >
          <Sun className="h-6 w-6" />
        </button>
      </div>

      <ul className={`flex space-x-6 ${isMenuOpen ? 'flex-col absolute top-[64px] left-0 w-full bg-[#003366] p-4 space-y-4' : ''}`}>
        <li>
          <Link to="/" className="text-white font-bold hover:bg-[#00b3b3] hover:text-[#ffcc00] px-4 py-2 rounded transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white font-bold hover:bg-[#00b3b3] hover:text-[#ffcc00] px-4 py-2 rounded transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white font-bold hover:bg-[#00b3b3] hover:text-[#ffcc00] px-4 py-2 rounded transition-colors">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white font-bold hover:bg-[#00b3b3] hover:text-[#ffcc00] px-4 py-2 rounded transition-colors">
            Login
          </Link>
        </li>
        <li className="relative group">
          <button
            onClick={toggleMenu}
            className="text-white font-bold hover:bg-[#00b3b3] hover:text-[#ffcc00] px-4 py-2 rounded transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-48 bg-[#003366] rounded-md shadow-lg py-1 z-10`}>
            <Link to="/departments" className="block px-4 py-2 text-white hover:bg-[#00b3b3] transition-colors">
              Departments
            </Link>
            <Link to="/gallery" className="block px-4 py-2 text-white hover:bg-[#00b3b3] transition-colors">
              Gallery
            </Link>
            <Link to="/counseling" className="block px-4 py-2 text-white hover:bg-[#00b3b3] transition-colors">
              Counseling
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;