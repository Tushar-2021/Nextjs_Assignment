import React from 'react';
import Image from 'next/image';
import FigmaImage from '../../assets/Figma.jpg';
import miroImage from "../../assets/MiroImage.jpg";
import adobeXDImage from "../../assets/AdobeXDImage.jpg";
import Vector2 from "../../assets/Vector.jpg";
import Line2 from "../../assets/line2.jpg"
const DesignTool = () => {
  return (
    <div className="flex flex-col items-center mt-4">

      <div>
        <div className="flex mr-5">
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={FigmaImage} alt="Figma" width={50} height={50} className="rounded-full" />
            <span className="text-white">Figma</span>
          </div>
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={adobeXDImage} alt="Sketch" width={50} height={50} className="rounded-full" />
            <span className="text-white">Sketch</span>
          </div>

        </div>


        <div className='flex'>
          <span className="text-white text-lg font-bold mb-4">Design Tool</span>
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={miroImage} alt="Miro" width={50} height={50} className="rounded-full" />
            <span className="text-white">Miro</span>
          </div>
          <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
            <Image src={adobeXDImage} alt="Adobe XD" width={50} height={50} className="rounded-full" />
            <span className="text-white">Adobe XD</span>
          </div>
          <span><Image src={Line2} alt="/imageline" /></span>
        </div>
      </div>
    </div>
  );
};

export default DesignTool;
