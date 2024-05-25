import React from 'react';
import Image from 'next/image';
import reactImage from "../../assets/ReactImage.jpg";
import gatsbyImage from "../../assets/GatsbyImage.jpg";
import nextJSImage from "../../assets/NextJSImage.jpg";
import htmlImage from "../../assets/HTMLImage.jpg";
import Vector2 from "../../assets/Vector.jpg";
import Line1 from "../../assets/line1.jpg"

const WebFrameworks = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-white text-lg font-bold mb-4">Web Frameworks</h2>
      <div className='flex flex-col'>
        <div className='grid grid-cols-1 items-center justify-center w-2/3'>
          <div className='flex items-center'>
            <p className='text-lg text-pink-500'>Get Your design live codes with latest frameworks</p>
            <Image src={Line1} alt="/" className='absolute ml-[12.5rem] mt-[115px]' />
          </div>
        </div>
        <div className="flex">

          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={reactImage} alt="React" width={50} height={50} className="rounded-full" />
            <span className="text-white">React</span>
          </div>
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={gatsbyImage} alt="Gatsby" width={50} height={50} className="rounded-full" />
            <span className="text-white">Gatsby</span>
          </div>
        </div>
        <div className="flex ml-10 mb-2">
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={nextJSImage} alt="Next.js" width={50} height={50} className="rounded-full" />
            <span className="text-white">Next.js</span>
          </div>
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={htmlImage} alt="HTML" width={50} height={50} className="rounded-full" />
            <span className="text-white">HTML</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebFrameworks;
