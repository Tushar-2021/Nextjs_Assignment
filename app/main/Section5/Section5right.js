import Image from 'next/image'
import React from 'react'
import Fitcook from "../../assets/fitcook.jpg";
import FigmaFit from "../../assets/Figmafit.jpg"

const Section5right = () => {
  return (
    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
      <div className='px-4'>
        <p className='text-4xl py-3 md:mt-2 md:mb-2'>We adapt with any design tools you want</p>
        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. urna quisque cursus praesent imperdiet velit duis morbi sit</p>
      </div>
      <div className='relative flex justify-center items-center mt-8'>
        <div className='relative w-full max-w-md'>
          <Image src={Fitcook} className='w-full h-auto rounded-xl' alt="Fitcook" />
          <div className='absolute bottom-[9%] right-[50%] w-full transform translate-x-1/2 translate-y-1/4'>
            <Image src={FigmaFit} className='w-full h-full rounded-xl' alt="Figma Fit" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5right
