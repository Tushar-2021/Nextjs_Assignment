import Image from 'next/image'
import React from 'react'
import SectionImage from "../../assets/section1.jpg"

const Section6B = () => {
  return (
    <div className='flex flex-col md:flex-row mb-0 pt-[50px]  mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
      <div className='md:w-1/2 relative mt-12'>
        <Image src={SectionImage} className='w-full h-[70%] rounded-r-2xl' alt="/image" />
      </div>
      <div className='md:w-1/2 md:pl-4 mt-12 '>
        <p className='text-lg font-bold mb-2'>Get Live Pixel Perfect Prototyping and Share these with your team</p>
        <p className='text-md font-normal mt-10'>Lorem Aenean sit amet lacinia nisl. Duis tempus iaculis lorem at rutrum. Duis imperdiet sollicitudin lorem, et semper sapien lacinia ut. In suscipit augue enim. Nullam at molestie quam. Nulla laoreet tempus odio vel ultrices. Suspendisse a felis sit amet nisl hendrerit volutpat et eu elit.</p>
      </div>
    </div>
  )
}

export default Section6B
