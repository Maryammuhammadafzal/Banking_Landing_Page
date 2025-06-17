import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";
import Border from "../public/border.png";
const Header = () => {
  let navItem = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/",
      name: "About us",
    },
    {
      link: "/",
      name: "Features",
    },
    {
      link: "/",
      name: "Pricing",
    },
    {
      link: "/",
      name: "Contact Us",
    },
  ];
  return (
    <header className="w-full h-[120px] py-4 flex justify-center items-center">
      <div className="w-full h-auto flex justify-between items-center">
        <a href="/" className="logo">
          <Image src={Logo} width={150} height={150} alt="logo" className="" />
        </a>
        <nav className=" w-auto h-auto flex justify-center items-center p-2">
          <ul className="md:flex gap-2 lg:gap-7 hidden xl:gap-10 w-full h-auto">
            {navItem &&
              navItem.map(({ link, name }, index) => (
                <li key={index} className="flex flex-col items-center gap-1 h-auto w-auto uppercase text-sm group hover:font-bold font-normal">
                  <a href={link}>{name}</a>
                  <Image
                    src={Border}
                    width={40}
                    height={30}
                    alt="border"
                    className=" group-hover:block hidden"
                  />
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
