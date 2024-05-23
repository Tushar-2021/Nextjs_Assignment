import React from "react";
import Image from "next/image";
import Fitman from "../../assets/figmafitmain.jpg";
import ChakraUi from "../../assets/chakraUI.jpg";
import Bootstrap from "../../assets/Bootstrap.jpg"
import MaterialUI from "../../assets/MaterialUI.jpg"
import AntDesign from "../../assets/antDesign.jpg"

const Section5 = () => {
  return (
    <>
      <div>
        <div className="text-center mb-2">
          <div className="mb-6 md:mt-2 md:mb-2">
            <p className="text-2xl py-3 md:mt-2 md:mb-2">Validating a New IDEA? Iterating your Existing product?</p>
          </div>
          <p className="text-4xl mt-4 mb-10 md:mt-2 md:mb-2 text-yellow-500 font-bold	mb-2">Here’s how Plat UI Fits in </p>
        </div>
        <div>
          <div className="mt-10">
            <div>
              <Image src={Fitman} className="mr-1 rounded-r-2xl " alt="imgfit" />
            </div>
            <div>
              <div className="flex flex-row justify-around">
                <div class="box-border h-20 w-20  bg-white m4 rounded-2xl mt-4 flex justify-center items-center ml-4 ">
                  <div className="flex flex-col"><Image src={ChakraUi} className="ml-4 rounded-r-2xl w-1/2 overflow-hidden" alt="imgfit" />
                    <p className="text-purple-500 text-center">Chakra</p>
                  </div>
                </div>
                <div class="box-border h-20 w-20  bg-white m4 rounded-2xl mt-4 flex justify-center items-center ml-4 ">
                  <div className="flex flex-col"><Image src={Bootstrap} className="ml-4 rounded-r-2xl w-1/2 overflow-hidden" alt="imgfit" />
                    <p className="text-purple-500 text-center">Bootstrap</p>
                  </div>
                </div>
                <div class="box-border h-20 w-20  bg-white m4 rounded-2xl mt-4 flex justify-center items-center ml-4 ">
                  <div className="flex flex-col"><Image src={MaterialUI} className="ml-4 rounded-r-2xl w-1/2 overflow-hidden" alt="imgfit" />
                    <p className="text-purple-500 text-center">MaterialUI</p>
                  </div>
                </div>
                <div class="box-border h-20 w-20  bg-white m4 rounded-2xl mt-4 flex justify-center items-center ml-4 ">
                  <div className="flex flex-col"><Image src={AntDesign} className="ml-4 rounded-r-2xl w-1/2 overflow-hidden" alt="imgfit" />
                    <p className="text-purple-500 text-center">AntDesign</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Section5