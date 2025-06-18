import React from "react";
import HeroBg from "../../public/hero-background-image.png";
import HeadingBorder from "../../public/heading-border.png";
import ContactImage from "../../public/contact-image.png";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className="w-full font-sans relative overflow-hidden h-auto flex justify-center items-center">
      <div className=" w-full h-full flex justify-center items-center">
        <div className="w-full px-3 h-full items-center justify-start flex flex-col gap-4">
            <div className="flex md:flex-row flex-col w-full h-full items-center ">
              <div className="md:w-[60%] lg:pl-20 w-full  h-auto flex flex-col gap-3">
                <h1 className="font-extrabold xl:text-6xl md:text-5xl max-w-3xl pr-10 sm:text-5xl xs:text-4xl text-2xl 2xl:text-[64px] 2xl:leading-24 lg:leading-18 sm:leading-14 leading-10  uppercase">
                  Join the FutureBank Family Today!
                </h1>
                <Image
                  src={HeadingBorder}
                  alt="border"
                  width={400}
                  height={70}
                  className="w-[50%]"
                />
                <p className="md:text-lg text-base ">
                  Experience the future of banking with FutureBank Online. Sign
                  up now and take control of your finances like never before.
                  Contact us to learn more or customize a plan that works best
                  for you!
                </p>
              </div>

              <div className="md:w-[45%] w-full h-auto relative justify-end items-end flex">
                <Image
                  src={ContactImage}
                  alt="hero-image"
                  width={750}
                  height={529}
                  className="z-20 w-[760px]"
                />
                <div className="xl:min-w-[370px] md:w-[320px] md:h-[320px] xl:h-[370px] rounded-full bg-[#C7D216] -right-10  absolute bottom-10"></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
