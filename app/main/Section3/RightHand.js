import React from 'react';
import Image from 'next/image';
import Designer from "../../assets/Designer_person.jpg";
import Laptop from "../../assets/Laptop.jpg";

const RightHand = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center md:items-stretch mt-5">
      <div className="flex flex-col items-center px-2">
        <Image src={Designer} alt="Designer" className="rounded-md h-20 w-20" />
        <button
          type="button"
          className="shadow-2xl shadow-blue-500/20 text-pink-500  font-medium rounded-full text-sm px-3 py-2 mb-2 dark:bg-white dark:text-white bg-white mt-1"
        >
          Designer
        </button>
      </div>
      <Image src={Laptop} alt="Laptop" className="rounded-md w-full md:w-[50%] mt-5 md:mb-0" />
      <div className="flex flex-col items-center px-2">
        <Image src={Designer} alt="Designer" className="rounded-md h-20 w-20" />
        <button
          type="button"
          className=" shadow-2xl shadow-blue-500/20 text-pink-500  font-medium rounded-full text-sm px-3 py-2 mb-2 dark:bg-white dark:text-white bg-white mt-1"
        >
          Engineer
        </button>
      </div>
    </div>
  );
};

export default RightHand;
