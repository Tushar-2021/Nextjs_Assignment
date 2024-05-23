import Image from 'next/image'
import React from 'react'
import Working1 from "../../assets/workin1.jpg"
const SectionA = () => {
  return (
    <div>
      <div>
        <p className='text-2xl py-3 md:mt-2 md:mb-2 text-center'>Here’s how Plat UI Work in </p>
      </div>
      <div className='flex flex-row justify-between'>
        <div>
          <Image src={Working1} alt="/" />
        </div>
        <div className='mt-4'>
          <p className='text-xl mt-4 mb-10 md:mt-2 md:mb-2 text-yellow-500 font-bold	mb-2'>Lorem ipsum dolor sit amet, consecteruse
            adipiscing elit. urna quisque dursus present
            imperdiet viverra veit duis morbi sit.</p>
        </div>

      </div>
    </div>
  )
}

export default SectionA