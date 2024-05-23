import React from 'react';
import Image from 'next/image';
import typescriptImage from "../../assets/TypescriptImage.jpg";
import tailwindImage from "../../assets/TailwindImage.jpg";
import javascriptImage from "../../assets/JavaScriptImage.jpg";
import cssImage from "../../assets/CSSImage.jpg";

const CodeSettings = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-white text-lg font-bold mb-4">Code Settings</h2>
      <div className="flex ">
        <div className=" text-center flex flex-col items-center justify-center">
          <Image src={typescriptImage} alt="TypeScript" width={50} height={50} className="rounded-full" />
          <span className="text-white">TypeScript</span>
        </div>
        <div className=" text-center flex flex-col items-center justify-center">
          <Image src={tailwindImage} alt="Tailwind" width={50} height={50} className="rounded-full" />
          <span className="text-white">Tailwind</span>
        </div>
        <div className=" text-center flex flex-col items-center justify-center">
          <Image src={javascriptImage} alt="JavaScript" width={50} height={50} className="rounded-full" />
          <span className="text-white">JavaScript</span>
        </div>
        <div className=" text-center flex flex-col items-center justify-center">
          <Image src={cssImage} alt="CSS" width={50} height={50} className="rounded-full" />
          <span className="text-white">CSS</span>
        </div>
      </div>
    </div>
  );
};

export default CodeSettings;
