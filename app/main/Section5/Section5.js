import React from "react";
import Image from "next/image";
import Fitman from "../../assets/figmafitmain.jpg";
import ChakraUi from "../../assets/chakraUI.jpg";
import Bootstrap from "../../assets/Bootstrap.jpg";
import MaterialUI from "../../assets/MaterialUI.jpg";
import AntDesign from "../../assets/antDesign.jpg";

const Section5 = () => {
  return (
    <div className='text-center mb-2 px-4'>
      <div className="mb-6 md:mt-2 md:mb-2">
        <p className="text-2xl py-3 md:mt-2 md:mb-2">Validating a New IDEA? Iterating your Existing product?</p>
      </div>
      <p className="text-4xl mt-4 mb-10 md:mt-2 md:mb-2 text-yellow-500 font-bold">Here’s how Plat UI Fits in</p>
      <div className="mt-10">
        <Image src={Fitman} className="w-full h-auto rounded-r-2xl" alt="Fitman" />
        <div className="flex flex-wrap justify-around mt-4">
          <div className="box-border h-20 w-20 bg-white m-4 rounded-2xl flex justify-center items-center">
            <div className="flex flex-col items-center">
              <Image src={ChakraUi} className="w-1/2 rounded-r-2xl" alt="Chakra UI" />
              <p className="text-purple-500 text-center mt-1">Chakra</p>
            </div>
          </div>
          <div className="box-border h-20 w-20 bg-white m-4 rounded-2xl flex justify-center items-center">
            <div className="flex flex-col items-center">
              <Image src={Bootstrap} className="w-1/2 rounded-r-2xl" alt="Bootstrap" />
              <p className="text-purple-500 text-center mt-1">Bootstrap</p>
            </div>
          </div>
          <div className="box-border h-20 w-20 bg-white m-4 rounded-2xl flex justify-center items-center">
            <div className="flex flex-col items-center">
              <Image src={MaterialUI} className="w-1/2 rounded-r-2xl" alt="Material UI" />
              <p className="text-purple-500 text-center mt-1">MaterialUI</p>
            </div>
          </div>
          <div className="box-border h-20 w-20 bg-white m-4 rounded-2xl flex justify-center items-center">
            <div className="flex flex-col items-center">
              <Image src={AntDesign} className="w-1/2 rounded-r-2xl" alt="Ant Design" />
              <p className="text-purple-500 text-center mt-1">AntDesign</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
