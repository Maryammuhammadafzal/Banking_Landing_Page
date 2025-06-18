import Image from "next/image";
import React from "react";
import HeadingBorder from "../../public/heading-border.png";

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

        <div className="w-ful h-auto">
                <div class="slider-wrap">
  <div id="card-slider" class="slider">
    <div class="slider-item">
        <div class="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
        </div>
        <div class="animation-card_content">
            <h4 class="animation-card_content_title title-2">Charlize Theron 1</h4>
            <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p class="animation-card_content_city">New York, NY</p>
        </div>
    </div>
    <div class="slider-item">
        <div class="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
        </div>
        <div class="animation-card_content">
            <h4 class="animation-card_content_title title-2">Charlize Theron 2</h4>
            <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p class="animation-card_content_city">New York, NY</p>
        </div>
    </div>
    <div class="slider-item">
        <div class="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
        </div>
        <div class="animation-card_content">
            <h4 class="animation-card_content_title title-2">Charlize Theron 3</h4>
            <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p class="animation-card_content_city">New York, NY</p>
        </div>
    </div>
    <div class="slider-item">
        <div class="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
        </div>
        <div class="animation-card_content">
            <h4 class="animation-card_content_title title-2">Charlize Theron 4</h4>
            <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p class="animation-card_content_city">New York, NY</p>
        </div>
    </div>
    <div class="slider-item">
        <div class="animation-card_image">
            <img src="https://uznayvse.ru/images/stories2016/uzn_1460039478.jpg" alt=""/>
        </div>
        <div class="animation-card_content">
            <h4 class="animation-card_content_title title-2">Charlize Theron 5</h4>
            <p class="animation-card_content_description p-2">With no contractual commitments comes the freedom of having top notch content created whenever.</p>
            <p class="animation-card_content_city">New York, NY</p>
        </div>
    </div>
</div>
</div> 
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

 
