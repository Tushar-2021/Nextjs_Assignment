import React from 'react'
import Section5 from './Section5'
import Section5right from './Section5right'

const CompleteSection5 = () => {
  return (
    <div className='h-[1000px]'>
      <div className='grid grid-cols-[1fr_1fr] ' >
        <Section5 />
        <Section5right />
      </div>
    </div>
  )
}

export default CompleteSection5