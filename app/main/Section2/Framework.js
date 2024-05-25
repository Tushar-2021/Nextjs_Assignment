import React from 'react';
import Image from 'next/image';
import reactImage from "../../assets/react_native.jpg";
import FlutterImage from "../../assets/FlutterImage.jpg";
import ReactImage from "../../assets/ReactImage.jpg";
import Vector2 from "../../assets/Vector.jpg"


const Frameworks = () => {
  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-wrap justify-center mt-3">

        <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
          <Image src={reactImage} alt="React" width={50} height={50} className="rounded-full" />
          <span className="text-sm text-yellow-600">React</span>

        </div>


        <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
          <Image src={FlutterImage} alt="Flutter" width={50} height={50} className="rounded-full" />
          <span className="text-sm text-yellow-600">Flutter</span>
        </div>
      </div>
      <h2 className="text-white text-lg font-bold mb-4">Frameworks</h2>
      <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
        <Image src={ReactImage} alt="React.js" width={50} height={50} className="rounded-full" />
        <span className="text-sm text-yellow-600">React.js</span>
      </div>
    </div>


  );
};

export default Frameworks;
