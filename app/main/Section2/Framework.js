import React from 'react';
import Image from 'next/image';
import reactImage from "../../assets/react_native.jpg";
import FlutterImage from "../../assets/FlutterImage.jpg";
import ReactImage from "../../assets/ReactImage.jpg";

const Frameworks = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-lg font-bold mb-4">Frameworks</h2>
      <div className="flex flex-wrap justify-center mt-3">
        <div className="hexagon-container">
          <div className="hexagon">
            <Image src={reactImage} alt="React" width={50} height={50} className="rounded-full" />
            <span className="text-white">React</span>
          </div>
        </div>
        <div className="hexagon-container">
          <div className="hexagon">
            <Image src={FlutterImage} alt="Flutter" width={50} height={50} className="rounded-full" />
            <span className="text-white">Flutter</span>
          </div>
        </div>
        <div className="hexagon-container">
          <div className="hexagon">
            <Image src={ReactImage} alt="React.js" width={50} height={50} className="rounded-full" />
            <span className="text-white">React.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
