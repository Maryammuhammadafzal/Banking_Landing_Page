import React from "react";
import HeroBg from "../../public/hero-background-image.png";
import Header from "@/components/Header";
import HeadingBorder from "../../public/heading-border.png";
import HeroImage from "../../public/hero-image.png";
import Image from "next/image";
const HeroPage = () => {
  return (
    <div className="w-full lg:h-screen font-sans relative overflow-hidden h-auto flex justify-center items-center">
      <div
        className="bg-center absolute top-0 -z-10 left-0 opacity-45 bg-cover w-full h-full"
        style={{ backgroundImage: `url(${HeroBg.src})` }}
      ></div>
      <div className=" w-full h-full flex justify-center items-center">
        <div className="lg:w-[90%] w-full h-full items-center justify-start flex flex-col gap-4">
          <Header />
          <div className="flex w-full h-full items-center ">
            <div className="w-[60%] 2xl:pr-5 h-auto flex flex-col gap-3">
              <h1 className="font-extrabold xl:text-6xl md:text-5xl sm:text-4xl text-3xl 2xl:text-[64px] 2xl:leading-24 lg:leading-20 sm:leading-16 leading-14  uppercase">
                Discover the Future of Banking with FutureBank
              </h1>
              <Image
                src={HeadingBorder}
                alt="border"
                width={400}
                height={70}
                className=""
              />
            </div>
            <div className="w-[40%] h-auto justify-end flex">
                <Image
                src={HeroImage}
                alt="hero-image"
                width={450}
                height={480}
                className=""
              />
              <div className="w-[370px] h-[370px] rounded-full bg-[#C7D216] -right-20 -z-10 absolute bottom-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
