'use client'
import Image from "next/image";
import React from "react";
import HeadingBorder from "../../public/heading-border.png";
import { useEffect } from "react";
const PricingPage = () => {

  return (
    <div className="w-full h-auto flex justify-center md:py-20 py-10  items-center">
      <div className="w-[90%] h-auto flex flex-col items-center gap-5">
        <div className=" w-fit  h-auto flex flex-col gap-3 justify-center items-end">
          <h1 className="font-extrabold xl:text-6xl md:text-5xl max-w-3xl lg:pr-14 sm:text-5xl xs:text-4xl text-3xl 2xl:text-[64px] 2xl:leading-24 lg:leading-18 sm:leading-14 leading-10  uppercase">
            Pricing Plans
          </h1>
          <Image
            src={HeadingBorder}
            alt="border"
            width={400}
            height={70}
            className="w-[50%]"
          />
        </div>

        <div className="w-full flex justify-center items-center h-auto relative">
          <div className="1 w-[375px] h-[572px] bg-[#E6E6E6] rounded-4xl py-6 px-3 flex flex-col relative justify-between"></div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
