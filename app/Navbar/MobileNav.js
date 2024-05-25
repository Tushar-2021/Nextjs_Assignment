// components/MobileNav.js
import React, { useState } from 'react';
import { FiHome, FiSettings, FiStar, FiUsers, FiUser, FiInfo, FiX } from 'react-icons/fi';
import { MdOutlineToggleOn } from 'react-icons/md';
import SettingsComponent from '../main/mobilecomponent/SettingsComponent';

const MobileNav = ({ onClose }) => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="bg-black h-full w-64 fixed top-0 left-0 z-50">
      {showSettings ? (
        <SettingsComponent onClose={() => setShowSettings(false)} />
      ) : (
        <>
          <div className="flex justify-end px-4 py-2">
            <FiX className="h-6 w-6 text-white cursor-pointer" onClick={onClose} />
          </div>
          <ul className="flex flex-col items-start space-y-4 py-4 pl-6">
            <li className="flex items-center space-x-2 text-white">
              <FiUser className="h-5 w-5 text-white" />
              <a href="#" className="text-white">Profile</a>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <FiHome className="h-5 w-5 text-white" />
              <a href="#" className="text-white">Home</a>
            </li>
            <li
              className="flex items-center space-x-2 text-white cursor-pointer"
              onClick={() => setShowSettings(true)}
            >
              <FiSettings className="h-5 w-5 text-white" />
              <span>Setting</span>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <FiStar className="h-5 w-5 text-white" />
              <a href="#" className="text-white">Rate us</a>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <FiUsers className="h-5 w-5 text-white" />
              <a href="#" className="text-white">Follow Us</a>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <FiUser className="h-5 w-5 text-white" />
              <a href="#" className="text-white">My Account</a>
            </li>
            <li className="flex items-center space-x-2 text-white">
              <FiInfo className="h-5 w-5 text-white" />
              <a href="#" className="text-white">About Casture</a>
            </li>
          </ul>
          <div className="flex justify-between items-center px-6 py-4 mt-auto w-full text-white">
            <span>App mode</span>
            <MdOutlineToggleOn className="h-6 w-6 text-blue-500" />
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNav;
