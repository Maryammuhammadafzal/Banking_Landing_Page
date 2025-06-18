import React from "react";
import HeadingBorder from "../../public/heading-border.png";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const AboutPage = () => {
  let about_data = [
    {
      title: "Convenience at Your Fingertips",
      description: `Manage your accounts, transfer funds, and pay bills anytime, anywhere. Whether you're at home or on the go, your bank is always with you.`,
      button: "Explore",
    },
    {
      title: "Unparalleled Security",
      description:
        "Your safety is our priority. With state-of-the-art encryption and multi-factor authentication, your transactions and personal information are always protected.",
      button: "Explore",
    },
    {
      title: "Comprehensive Services",
      description:
        "From savings and checking accounts to loans and investments, SecureBank Online offers a full suite of services to meet your financial needs.",
      button: "Explore",
    },
    {
      title: "Personalized Experience",
      description:
        "Customize your banking dashboard to display the features and tools you use most. Whether it’s tracking expenses or setting financial goals.",
      button: "Explore",
    },
  ];
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="lg:w-[90%] w-full px-3 h-auto py-20 gap-10 flex flex-col">
        <div className=" w-full  h-auto flex flex-col gap-3">
          <h1 className="font-extrabold xl:text-6xl md:text-5xl max-w-3xl pr-10 sm:text-5xl xs:text-4xl text-3xl 2xl:text-[64px] 2xl:leading-24 lg:leading-18 sm:leading-14 leading-10  uppercase">
            Why Choose FUTureBank Online?
          </h1>
          <Image
            src={HeadingBorder}
            alt="border"
            width={400}
            height={70}
            className="w-[50%]"
          />
        </div>
        <div className="cards w-full flex flex-wrap gap-10 justify-center items-center">
          {about_data &&
            about_data.map(({ title, description, button }, index) => (
              <Card key={index} className="py-6 px-1 xs:h-[273px] h-auto w-[273px] bg-[#E6E6E6] hover:text-white hover:bg-[#C7D216]">
                <CardContent className="text-center  space-y-4">
                  <h2 className="text-xl font-extrabold uppercase">
                  {title}
                  </h2>
                  <p className="text-sm">
                    {description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <a href="" className="underline">
                    {button}
                  </a>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
