import Image from "next/image";
import React from "react";
import Card1 from "../../assets/card_component1.jpg";
import Card2 from "../../assets/card_component2.jpg";
import Card3 from "../../assets/card_component3.jpg";

const Section4 = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="text-center">
          <div className="mb-6 md:mt-2 md:mb-2">
            <p className="text-2xl py-3 md:mt-2 md:mb-2">Easy for developing stacks</p>
          </div>
          <p className="text-4xl mt-4 mb-10 md:mt-2 md:mb-2 text-yellow-500 font-bold	 ">Stop hard coding, embrace <br />components</p>
        </div>
        <div className="flex flex-row justify-center mt-5">
          <div className="flex flex-col justify-evenly">
            <div>
              <Image src={Card3} className="mr-1" alt="card" />
            </div>
            <div>
              <h2>Get code for specific<br />
                section :</h2>
              <Image src={Card2} className="ml-2" alt="" />
            </div>
          </div>
          <div>
            <Image src={Card1} className="me-3" alt="" />
          </div>
        </div>
      </div>
    </>
  )
};

export default Section4;