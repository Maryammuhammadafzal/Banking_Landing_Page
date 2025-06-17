import React from "react";
import HeadingBorder2 from '../../public/heading-border-2.png'
import CustomerSupportIcon from '../../public/customer-support-icon.png'
import Image from "next/image";
import { Button } from "@/components/ui/button";
const TestimonialPage = () => {
  return (
    <div className="w-full h-auto py-20 flex items-center gap-5">
      <div className="partner-card bg-[#C7D216] w-[65%] h-auto pl-14 pr-6 rounded-tr-4xl rounded-br-4xl flex flex-col justify-center gap-3 py-8">
        <div className=" w-full  h-auto flex flex-col gap-3">
          <h1 className="font-extrabold xl:text-6xl md:text-5xl max-w-3xl lg:pr-14 sm:text-5xl xs:text-4xl text-3xl 2xl:text-[64px] 2xl:leading-22 lg:leading-18 sm:leading-14 leading-10  uppercase">
            Your Financial Partner
          </h1>
          <Image
            src={HeadingBorder2}
            alt="border"
            width={400}
            height={70}
            className="w-[50%]"
          />
        </div>
        <p className="text-black text-lg">At  FutureBank Online, we’re committed to helping you achieve your financial goals. From saving for a dream vacation to managing your investments, we’re here to support you every step of the way.</p>
      </div>
      <div className="customer-card bg-[#E6E6E6] w-[35%] h-auto pl-8 pr-8 rounded-tl-4xl rounded-bl-4xl flex flex-col justify-center gap-7 py-8">
        <div className=" w-full  h-auto items-center flex gap-3">
          <Image src={CustomerSupportIcon} width={70} height={70} alt="icon"
          />  <h2 className="font-extrabold text-3xl uppercase">Customer Support</h2>
        </div>
        <p className="text-black text-lg">We’re here for you 24/7. Whether you have a question about a transaction or need assistance with our platform, our dedicated customer service team is just a call or click away.</p>
      <div className="py-3"><Button className='bg-[#C7D216]'>Contact Now</Button></div>
      </div>
    </div>
  );
};

export default TestimonialPage;
