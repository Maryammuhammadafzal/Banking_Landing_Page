import Image from "next/image";
import AboutPage from "./About/Page";
import FeaturesPage from "./Features/Page";
import TestimonialPage from "./Testimonial/Page";
import ContactPage from "./Contact/Page";
import PricingPage from "./Pricing/Page";


export default function Home() {
 
  return (
  <div  className="w-full h-auto font-sans overflow-hidden bg-[#EEEEEE]">
<AboutPage/>
<FeaturesPage/>
<TestimonialPage/>
<PricingPage/>
<ContactPage/>
  </div>
  );
}
