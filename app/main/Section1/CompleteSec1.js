// components/CompleteSec1.js
import React from 'react';
import Section1 from './Section1';
import Section1_b from './Section1_b';

const CompleteSec1 = () => {
  return (
    <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-evenly'>
      <Section1 />
      <Section1_b />
    </div>
  );
};

export default CompleteSec1;
