import React from 'react'
import Section5 from './Section5'
import Section5right from './Section5right'

const CompleteSection5 = () => {
  return (
    <div className='h-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <Section5 />
        <Section5right />
      </div>
    </div>
  )
}

export default CompleteSection5
