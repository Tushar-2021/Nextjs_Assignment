import React from 'react';
import Image from 'next/image';
import figmaImage from "../../assets/FigmaImage.jpg";
import sketchImage from "../../assets/SketchImage.jpg";
import miroImage from "../../assets/MiroImage.jpg";
import adobeXDImage from "../../assets/AdobeXDImage.jpg";

const DesignTool = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-white text-lg font-bold mb-4">Design Tool</h2>
      <div className="flex space-x-4 mt-3">
        <div className="hexagon text-center flex flex-col items-center justify-center">
          <Image src={figmaImage} alt="Figma" width={50} height={50} className="rounded-full" />
          <span className="text-white">Figma</span>
        </div>
        <div className="hexagon text-center flex flex-col items-center justify-center">
          <Image src={sketchImage} alt="Sketch" width={50} height={50} className="rounded-full" />
          <span className="text-white">Sketch</span>
        </div>
        <div className="hexagon text-center flex flex-col items-center justify-center">
          <Image src={miroImage} alt="Miro" width={50} height={50} className="rounded-full" />
          <span className="text-white">Miro</span>
        </div>
        <div className="hexagon text-center flex flex-col items-center justify-center">
          <Image src={adobeXDImage} alt="Adobe XD" width={50} height={50} className="rounded-full" />
          <span className="text-white">Adobe XD</span>
        </div>
      </div>
    </div>
  );
};

export default DesignTool;
