import React from 'react';
import Image from 'next/image';
import reactImage from "../../assets/ReactImage.jpg";
import gatsbyImage from "../../assets/GatsbyImage.jpg";
import nextJSImage from "../../assets/NextJSImage.jpg";
import htmlImage from "../../assets/HTMLImage.jpg";

const WebFrameworks = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-white text-lg font-bold mb-4">Web Frameworks</h2>
      <div className="flex space-x-4">
        <div className="hexagon text-center flex flex-col items-center justify-center">
          <Image src={reactImage} alt="React" width={50} height={50} className="rounded-full" />
          <span className="text-white">React</span>
        </div>
        <div className="hexagon text-center flex flex-col items-center justify-center">
          <Image src={gatsbyImage} alt="Gatsby" width={50} height={50} className="rounded-full" />
          <span className="text-white">Gatsby</span>
        </div>
        <div className="hexagon text-center flex flex-col items-center justify-center">
          <Image src={nextJSImage} alt="Next.js" width={50} height={50} className="rounded-full" />
          <span className="text-white">Next.js</span>
        </div>
        <div className="hexagon text-center flex flex-col items-center justify-center">
          <Image src={htmlImage} alt="HTML" width={50} height={50} className="rounded-full" />
          <span className="text-white">HTML</span>
        </div>
      </div>
    </div>
  );
};

export default WebFrameworks;
