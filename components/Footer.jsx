import Image from "next/image";
import React from "react";
import HeadingBorder from "../public/heading-border.png";
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full h-auto font-sans flex justify-center items-center py-10">
      <div className="w-[90%] flex flex-col gap-5 items-center">
        <div className="flex flex-col items-center gap-4 py-10 w-full h-auto ">
          <div className="w-full h-auto flex flex-col gap-3 ">
            <h1 className="font-extrabold text-neutral-100 text-center w-full xl:text-6xl md:text-5xl max-w-3xl sm:text-5xl xs:text-4xl text-3xl 2xl:text-[170px] 2xl:leading-40 lg:leading-18 sm:leading-14 leading-10  uppercase">
              FutureBank
            </h1>
            <Image
              src={HeadingBorder}
              alt="border"
              width={400}
              height={70}
              className="w-full"
            />
          </div>
          <div className=" w-full h-auto py-3 flex  flex-col justify-center items-center gap-6">
            <h2 className="text-4xl font-bold uppercase">FOllow Us On</h2>
            <div className="flex justify-center text-[#C7D216] text-5xl gap-6 items-center">
              <MdOutlineFacebook />
              <FaXTwitter />
              <FaLinkedin />
              <FaSquareInstagram />
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div className="copy"></div>
      </div>
    </div>
  );
};

export default Footer;
