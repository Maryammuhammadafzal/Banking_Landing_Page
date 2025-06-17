import Image from "next/image";
import React from "react";
import HeadingBorder from "../public/heading-border.png";
const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-10">
      <div className="w-[90%] flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-4 w-full h-auto ">
          <div className="md:w-[60%] w-full  h-auto flex flex-col gap-3">
            <h1 className="font-extrabold text-neutral-200 xl:text-6xl md:text-5xl max-w-3xl pr-10 sm:text-5xl xs:text-4xl text-3xl 2xl:text-[170px] 2xl:leading-30 lg:leading-18 sm:leading-14 leading-10  uppercase">
                 FutureBank
            </h1>
            <Image
              src={HeadingBorder}
              alt="border"
              width={400}
              height={70}
              className="w-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
