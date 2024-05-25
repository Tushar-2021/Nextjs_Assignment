import Image from 'next/image'
import React from 'react'
import Working1 from "../../assets/workin1.jpg"
import Workin2 from "../../assets/workin2.jpg"

const SectionA = () => {
  return (

    <div className='flex flex-col md:text-center mb-10  mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
      <div>
        <p className='text-2xl py-3 md:mt-2 md:mb-2 text-center'>Here’s how Plat UI Work in</p>
      </div>

      <div className='flex flex-col md:flex-row pt-20 md:pt-0 relative z-10'>
        <div className='flex justify-center md:justify-start w-full'>
          <div className='relative w-full max-w-md'>
            <Image src={Working1} alt="Working 1" className='w-full h-auto rounded-xl md:max-w-[80%]' />
            <div className='absolute bottom-0 right-0 w-[70%] h-1/2 mb-10 transform  md:translate-x-1/2 md:translate-y-1/2'>
              <Image src={Workin2} alt="Working 2" className='w-full h-auto rounded-xl md:max-w-[100%]' />
            </div>
          </div>
        </div>
        <div className='mt-4 md:mt-0 md:ml-0 lg:ml-[-10%]'>
          <p className='text-xl mt-4 mb-10 md:mt-2 md:mb-2 text-yellow-500 font-bold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. urna quisque cursus praesent
            imperdiet viverra velit duis morbi sit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionA
