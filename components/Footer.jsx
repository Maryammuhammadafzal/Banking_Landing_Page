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
            <h1 className="font-extrabold text-neutral-100 text-center w-full xl:text-6xl md:text-5xl max-w-3xl sm:text-4xl xs:text-4xl text-4xl 2xl:text-[170px] 2xl:leading-40 lg:leading-18 sm:leading-14 leading-10  uppercase">
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
            <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold uppercase">FOllow Us On</h2>
            <div className="flex justify-center text-[#C7D216] md:text-5xl sm:text-4xl text-3xl gap-6 items-center">
              <MdOutlineFacebook />
              <FaXTwitter />
              <FaLinkedin />
              <FaSquareInstagram />
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div className="copyright flex justify-between md:flex-row gap-3 flex-col items-center w-full py-2">
          <p className="md:text-sm text-xs">
            © 2021 all copyright reserved. <a href="" className="underline">Rootlet Solution</a>.
          </p>
          <ul className="flex gap-3 md:text-lg text-sm">
            {" "}
            <li>Privacy Policy</li> <li>Term & Consition</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
