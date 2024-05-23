import React from 'react';
import { FiHome, FiBox, FiUsers, FiBook } from 'react-icons/fi';

const NavBelow = () => {
  return (
    <div className="flex justify-center items-center bg-black md:bg-transparent">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-4 py-4 md:py-0">
        <li className="flex items-center space-x-2 text-custom-yellow">
          <FiHome className="h-5 w-5" />
          <a href="#">Home</a>
        </li>
        <li className="flex items-center space-x-2 text-custom-yellow">
          <FiBox className="h-5 w-5" />
          <a href="#">Products</a>
        </li>
        <li className="flex items-center space-x-2 text-custom-yellow">
          <FiUsers className="h-5 w-5" />
          <a href="#">Community</a>
        </li>
        <li className="flex items-center space-x-2 text-custom-yellow">
          <FiBook className="h-5 w-5" />
          <a href="#">Resources</a>
        </li>
      </div>
    </div>
  );
};

export default NavBelow;

