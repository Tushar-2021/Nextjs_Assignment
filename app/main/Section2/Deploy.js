import React from 'react';

const Deploy = () => {
   return (
      <div className="flex flex-col items-center mt-4">
         <h2 className="text-white text-lg font-bold mb-4">Deploy</h2>
         <div className="flex space-x-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center w-[116px] h-[116px] flex items-center justify-center">
               <span className="text-white">GitHub</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center w-[116px] h-[116px] flex items-center justify-center">
               <span className="text-white">Vercel</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center w-[116px] h-[116px] flex items-center justify-center">
               <span className="text-white">Netlify</span>
            </div>
         </div>
      </div>
   );
};

export default Deploy;
