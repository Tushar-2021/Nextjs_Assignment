// Section1.js
import React from 'react';
import Image from 'next/image';
import { HiPhotograph, HiCollection, HiDocumentText } from 'react-icons/hi';
import image1 from "../../assets/section1.jpg";

const Section1 = () => {
  return (
    <>
    <div>
      <div className='flex flex-col items-center md:flex-row justify-center'>
        <div className='outline-dashed py-2 px-2 relative'>
          <div className='flex flex-row px-2'>
            <button className='bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-1 rounded-full'>Web</button>
            <button className='bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Mobile</button>
          </div>
          <div style={{ padding: '20px' }}>
            <Image src={image1} alt="Section 1" width={500} height={500} />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button className="bg-transparent text-blue-500 border border-white hover:bg-blue-500 hover:text-white font-bold py-2 px-6 rounded-lg ">Welcome</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-8">
        <div className='text-yellow-500'>
          <HiPhotograph className="text-3xl" />
        </div>
        <div className='text-yellow-500'>
          <HiCollection className="text-3xl" />
        </div>
        <div className='text-yellow-500'>
          <HiDocumentText className="text-3xl" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Section1;
