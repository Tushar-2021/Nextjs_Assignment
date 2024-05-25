import React from 'react';
import Image from 'next/image';
import Github from "../../assets/github.jpg";
import Vercel from "../../assets/vercel.jpg";
import Netlify from "../../assets/Netlify.jpg";
import Vector2 from "../../assets/Vector.jpg";

const Deploy = () => {
   return (
      <div className="flex flex-col items-center mt-4">
         <h2 className="text-white text-lg font-bold mb-4">Deploy</h2>
         <div className="flex space-x-4">
            <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
               <Image
                  src={Github}
                  alt="GitHub"
                  width={50}
                  height={50}
                  className="rounded-full"
               />
               <span className='text-sm text-yellow-600'>Github</span>
            </div>
            <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
               <Image
                  src={Vercel}
                  alt="Vercel"
                  width={50}
                  height={50}
                  className="rounded-full"
               />
               <span className='text-sm text-yellow-600'>Vercel</span>
            </div>
            <div className="text-center flex flex-col items-center justify-center w-[116px] h-[116px]" style={{ backgroundImage: `url(${Vector2.src})`, backgroundSize: 'cover' }}>
               <Image
                  src={Netlify}
                  alt="Netlify"
                  width={50}
                  height={50}
                  className="rounded-full"
               />
               <span className="text-sm text-yellow-600">Netlify</span>
            </div>
         </div>
         <div className="flex flex-col items-end mt-4 self-end text-right"> {/* Added classes to align text to the end and right */}
            <span className="text-white text-lg font-bold">Deploy</span><br />
            <p className='text-pink-500'>Deploy project with latest tools</p>
         </div>
      </div>
   );
};

export default Deploy;
