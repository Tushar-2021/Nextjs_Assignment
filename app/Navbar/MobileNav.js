import React from 'react';
import { FiHome, FiUser, FiStar, FiUsers, FiLogOut, FiX } from 'react-icons/fi';

const MobileNav = ({ onClose }) => {
  return (
    <div className="bg-black">
      <div className="flex justify-between  px-4 py-2">
        <div className="flex items-center space-x-2 text-white">
          <FiX className="h-6 w-6" onClick={onClose} />
        </div>
      </div>
      <ul className="flex flex-col items-start space-y-4 py-4">
        <li className="flex items-center space-x-2 text-white">
          <FiUser className="h-5 w-5 text-custom-yellow" />
          <a href="#">Profile</a>
        </li>
        <li className="flex items-center space-x-2 text-white">
          <FiHome className="h-5 w-5 text-custom-yellow" />
          <a href="#">Home</a>
        </li>
        <li className="flex items-center space-x-2 text-white">
          <FiUser className="h-5 w-5 text-custom-yellow" />
          <a href="#">Account</a>
        </li>
        <li className="flex items-center space-x-2 text-white">
          <FiStar className="h-5 w-5 text-custom-yellow" />
          <a href="#">Rate Us</a>
        </li>
        <li className="flex items-center space-x-2 text-white">
          <FiUsers className="h-5 w-5 text-custom-yellow" />
          <a href="#">Community</a>
        </li>
        <li className="flex items-center space-x-2 text-white">
          <FiLogOut className="h-5 w-5 text-custom-yellow" />
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
