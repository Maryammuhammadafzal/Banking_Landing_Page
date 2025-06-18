import React from "react";
import HeadingBorder from "../../public/heading-border.png";
import FeatureImage1 from "../../public/feature-image-1.png";
import FeatureCenterImage from "../../public/feature-center-image.png";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const FeaturesPage = () => {
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
      <div className="lg:w-[90%] w-full px-3 h-auto md:py-20 py-0 gap-10 md:flex-row flex-col flex">
        <div className=" w-full  h-auto flex flex-col gap-3">
          <h1 className="font-extrabold xl:text-6xl md:text-5xl max-w-3xl lg:pr-14 sm:text-5xl xs:text-4xl text-3xl 2xl:text-[64px] 2xl:leading-24 lg:leading-18 sm:leading-14 leading-10  uppercase">
            Core Features at a Glance
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
          <div className="xs:w-[440px] xs:h-[440px] relative sm:gap-10 gap-5 flex flex-wrap">
                <Image className="absolute top-[25%] left-[25%] max-sm:w-[170px] max-[400px]:hidden" src={FeatureCenterImage} alt='featureimage' width={200} height={200} />
            <Card className="xs:w-[200px] w-[45%] bg-[#E6E6E6] xs:h-[200px] h-auto flex justify-center items-center">
              <CardContent className="flex flex-col gap-3 justify-center items-center text-center">
                <Image 
                src={FeatureImage1}
                width={40}
                height={40}
                alt="feature-icon"
                className=""
                />
                <p className="font-bold sm:text-base text-sm">24/7 Account Access</p>
              </CardContent>
            </Card>
            <Card className="xs:w-[200px] w-[45%] bg-[#E6E6E6] xs:h-[200px] h-auto flex justify-center items-center">
              <CardContent className="flex flex-col gap-3 justify-center items-center text-center">
                <Image 
                src={FeatureImage1}
                width={40}
                height={40}
                alt="feature-icon"
                className=""
                />
                <p className="font-bold sm:text-base text-sm">24/7 Account Access</p>
              </CardContent>
            </Card>
            <Card className="xs:w-[200px] w-[45%] bg-[#E6E6E6] xs:h-[200px] h-auto flex justify-center items-center">
              <CardContent className="flex flex-col gap-3 justify-center items-center text-center">
                <Image 
                src={FeatureImage1}
                width={40}
                height={40}
                alt="feature-icon"
                className=""
                />
                <p className="font-bold sm:text-base text-sm">24/7 Account Access</p>
              </CardContent>
            </Card>
            <Card className="xs:w-[200px] w-[45%] bg-[#E6E6E6] xs:h-[200px] h-auto flex justify-center items-center">
              <CardContent className="flex flex-col gap-3 justify-center items-center text-center">
                <Image 
                src={FeatureImage1}
                width={40}
                height={40}
                alt="feature-icon"
                className=""
                />
                <p className="font-bold sm:text-base text-sm">24/7 Account Access</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
