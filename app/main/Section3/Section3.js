import React from 'react'
import RightHand from './RightHand'
import Lefthand from './Lefthand'

const Section3 = () => {
  return (
    <div className='container grid grid-cols-[1fr_1fr] mt-3 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
      <Lefthand />
      <RightHand />

    </div>
  )
}

export default Section3