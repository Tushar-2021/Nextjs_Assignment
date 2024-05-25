"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import NavBelow from './NavBelow';
import MobileNav from './MobileNav';
import { FiSearch, FiHeart, FiUser, FiMenu } from 'react-icons/fi';
import logo from "../assets/platUi.jpg"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-black shadow-lg relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center text-white">
                <Image src={logo} alt="Logo" className="h-8 w-8 mr-2" />

              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 border rounded"
              />
              <FiSearch className="text-white h-5 w-5 mx-2" />
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-white">
                <FiHeart className="h-5 w-5" />
              </a>
              <a href="#" className="text-white">
                <FiUser className="h-5 w-5" />
              </a>
              <a href="#" className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400 transition duration-300">
                Sign Up
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white">
                <FiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full`}>
            <MobileNav onClose={toggleMenu} />
          </div>
          <div className="md:hidden flex justify-center items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 border rounded"
            />
            <FiSearch className="text-white h-5 w-5 mx-2" />
          </div>
        </div>
      </nav>
      <div className="hidden md:block">
        <NavBelow />
      </div>
    </>
  );
};

export default Navbar;
