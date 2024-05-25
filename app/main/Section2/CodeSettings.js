import React from 'react';
import Image from 'next/image';
import typescriptImage from "../../assets/TypeScript.jpg";
import tailwindImage from "../../assets/TailwindImage.jpg";
import javascriptImage from "../../assets/JavaScriptImage.jpg";
import cssImage from "../../assets/CSSImage.jpg";
import Vector2 from "../../assets/Vector.jpg"

const CodeSettings = () => {

  return (
    <div className="flex flex-col items-center mt-4 ml-10 float-right">
      <h2 className="text-white text-lg font-bold mb-4">Code Settings</h2>
      <div className="flex flex-col">
        <div className='flex flex-row '>
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={typescriptImage} alt="TypeScript" width={50} height={50} className="rounded-full" />
            <span className=" text-sm text-yellow-600">TypeScript</span>
          </div>
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={tailwindImage} alt="Tailwind" width={50} height={50} className="rounded-full" />
            <span className="text-sm text-yellow-600">Tailwind</span>
          </div>
        </div>
        <div className='flex flex-row '>
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={javascriptImage} alt="JavaScript" width={40} height={40} className="rounded-full" />
            <span className="text-sm text-yellow-600">JavaScript</span>
          </div>
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={cssImage} alt="CSS" width={40} height={40} className="rounded-full" />
            <span className="text-sm text-yellow-600">CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSettings;
