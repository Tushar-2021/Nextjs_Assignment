// components/Deploy.js
import React from 'react';

const Deploy = () => {
   return (
      <div className="flex flex-col items-center mt-4">
         <h2 className="text-white text-lg font-bold mb-4">Deploy</h2>
         <div className="flex space-x-4">
            <div className="bg-gray-800 p-4 rounded-lg">GitHub</div>
            <div className="bg-gray-800 p-4 rounded-lg">Vercel</div>
            <div className="bg-gray-800 p-4 rounded-lg">Netlify</div>
         </div>
      </div>
   );
};

export default Deploy;
