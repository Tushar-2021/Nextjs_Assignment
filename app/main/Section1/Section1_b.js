import React from 'react';
import Image from 'next/image';
import image1 from "../../assets/WebImage.jpg";
import image2 from "../../assets/MobileImage.jpg";

const Section1_b = () => {
  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2">
            Turn your <span className="border border-orange-500 px-1">design</span> into production
          </h3>
          <h3 className="text-2xl font-semibold mb-2">
            Ready Frontend <span className="text-pink-500 px-1">{'<Code>'}</span> for
          </h3>
          <h3 className="text-2xl font-semibold">
            Web & Mobile Application
          </h3>
        </div>
        <div className="flex flex-row justify-between ">
          <div className='flex flex-col items-center '>
            <Image src={image1} alt="Web Image" width={150} height={300} />
            <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mt-2">Web</button>
          </div>
          <div className='flex flex-col items-center '>
            <Image src={image2} alt="Mobile Image" width={150} height={300} />
            <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mt-2">Mobile</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1_b;
