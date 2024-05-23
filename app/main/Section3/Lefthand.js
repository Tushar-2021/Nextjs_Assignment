import React from 'react';

const Lefthand = () => {
  return (
    <div className="">
      <p className="text-2xl text-pretty font-semibold py-3 px-2 text-center md:text-left">
        Communicate your design like <br /> never before
      </p>
      <p className="text-3xl font-bold text-red-600 py-3 px-2 text-center md:text-left">
        Create Interactive design with one click & <br /> tell your story
      </p>
      <button
        type="button"
        className="ml-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-3"
      >
        Start For Free
      </button>
    </div>
  );
};

export default Lefthand;
