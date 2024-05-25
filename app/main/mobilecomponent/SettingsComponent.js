// components/SettingsComponent.js
import { FiX } from 'react-icons/fi';

const SettingsComponent = ({ onClose }) => {
  return (
    <div className="bg-black text-white p-4 rounded-lg w-80 h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Setting</h2>
        <button className="text-white" onClick={onClose}>
          <FiX className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-4">
        <div className="border-b border-gray-700 py-2">
          <div className="flex items-center justify-between">
            <span className="font-bold">PREMIUM</span>
            <span className="text-gray-400">Figma</span>
          </div>
        </div>
        <div className="border-b border-gray-700 py-2">
          <div className="flex items-center">
            <span className="flex-grow">Notifications</span>
            <span className="text-white">&bell;</span>
          </div>
        </div>
        <div className="border-b border-gray-700 py-2">
          <div className="flex items-center">
            <span className="flex-grow">Sound</span>
            <span className="text-white">&#128266;</span>
          </div>
        </div>
        <div className="border-b border-gray-700 py-2">
          <div className="flex items-center">
            <span className="flex-grow">Help & FAQ</span>
            <span className="text-white">&#10067;</span>
          </div>
        </div>
        <div className="border-b border-gray-700 py-2">
          <div className="flex items-center">
            <span className="flex-grow">Official Blog</span>
            <span className="text-white">&#128221;</span>
          </div>
        </div>
        <div className="border-b border-gray-700 py-2">
          <div className="flex items-center">
            <span className="flex-grow">Terms & Privacy Policy</span>
            <span className="text-white">&#128274;</span>
          </div>
        </div>
        <div className="py-2 cursor-pointer" onClick={() => alert('Logout')}>
          <div className="flex items-center">
            <span className="flex-grow">Logout</span>
            <span className="text-white">&#10142;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
