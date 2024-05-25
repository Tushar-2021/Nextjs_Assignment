import React from 'react';
import WebFrameworks from './WebFrameworks';
import DesignTool from './DesignTool';
import Frameworks from './Framework';
import CodeSettings from './CodeSettings';
import Deploy from './Deploy';
import Logo from '../logo';
import Line from "../../assets/Line3.jpg";
import Image from 'next/image';

const Section2 = () => {
  return (
    <div className="bg-black min-h-screen py-10 px-4">
      <header className="text-center">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Plat UI integrates seamlessly to go from designs to code to deploy
        </h1>
      </header>
      <main className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:gap-4 mt-8">
          <WebFrameworks />
          <div className="hidden md:block mt-[80px]">
            <Logo />
          </div>
          <DesignTool />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="flex flex-col items-center md:items-start relative">
            <Frameworks />
            <Image src={Line} alt="/line" className="absolute left-2/3 transform -translate-x-1/2 top-[calc(35%+20px)]" />
            <div className="left-1/2 md:ml-10">
              <CodeSettings />
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <Deploy />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Section2;
