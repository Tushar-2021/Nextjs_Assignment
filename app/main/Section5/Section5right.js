import Image from 'next/image'
import React from 'react'
import Fitcook from "../../assets/fitcook.jpg";
import figmaFit from "../../assets/figmafit.jpg"

const Section5right = () => {
  return (
    <div className='ml-10 mt-20 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
      <div className='px-4'>
        <p className='text-4xl py-3 md:mt-2 md:mb-2'>We adapt with any design tools you want </p>
        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. urna quisque cursus
          praesent imperdiet velit duis morbi sit</p>
      </div>
      <div className='justify-center px-8 py-4'>
        <Image src={Fitcook} className='absolute ml-10' alt="/tem" />
        <Image src={figmaFit} className='relative mt-[75%] w-[92%] rounded-lg' alt="/tem1" />
      </div>
    </div>
  )
}

export default Section5right