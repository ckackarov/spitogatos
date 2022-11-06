import React from "react";

// Import images
import {
  logoSmall,
  menu,
  close,
  facebook,
  twitter,
  instagram,
  globe,
} from "../images/index";

// Import nav data
import { navLinks, mobileNavLinks } from "./constants/data";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const { name, href } = navLinks;

  return (
    <nav className=" flex  items-center justify-between px-[24px] lg:px-[72px] w-full h-[56px] lg:h-[64px] lg:w-full bg-bg_black">
      <div className="lg:relative lg:w-[72px] lg:h-[72px] transition-all">
        {/* Logo */}
        <img
          className="lg:absolute lg:top-7  w-[40px] h-[40px] lg:w-[72px] lg:h-[72px] cursor-pointer transition-all z-50"
          src={logoSmall}
          alt="logo_small"
        />
      </div>
      {/* Nav Links */}
      <ul className="hidden lg:flex items-center justify-center space-x-6 font-bold  ">
        {navLinks.map((link, index) => {
          return (
            <li className="lg:relative text-text_white group" key={index}>
              <a
                className="text_white before:content-[''] before:absolute
            before:-bottom-5 before:left-0 before:w-0 before:h-2 before:opacity-0 before:transition-all before:duration-300 group-hover:text-light_green before:bg-light_green hover:before:w-full hover:before:opacity-100
             "
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
      {/* Mobile Toggle */}
      <div className="flex flex-1 justify-end items-center lg:hidden z-50  ">
        <img
          className="w-[23px] h-[18px] cursor-pointer object-contain z-50"
          src={toggle ? close : menu}
          onClick={() => setToggle(!toggle)}
          alt="menu"
        />
        {/* Mobile Nav Links */}
        <div className={`${toggle ? "flex " : "hidden opacity-0 "}  `}>
          <div
            className=" transition ease-in-out h-screen bg-bg_blue absolute top-0
          right-0 w-full text-[38px] text-text_white font-primary text-center font-bold "
          >
            <div className="h-[56px] bg-bg_black">MENU</div>

            {/* Mobile Nav Links */}
            <div className="list-none bg-bg_white pt-[40px] space-y-2">
              {mobileNavLinks.map((link, index) => {
                return (
                  <li className="" key={index}>
                    <a
                      className="text-bg_black font-primary font-extrabold"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}

              <div className="flex justify-center font-primary font-extrabold text-[18px] pt-[24px] pb-[26px] ">
                <span className="mr-[10px] text-bg_black cursor-pointer">
                  EN
                </span>
                <span className="text-subTitle">|</span>
                <span className="text-subTitle ml-[10px] cursor-pointer">
                  GR
                </span>
              </div>
            </div>
            {/* Social Links */}
            <div className="px-[24.5px] bg-bg_blue ">
              <div className="h-screen">
                <div className="flex items-center justify-center space-x-[34px] mt-[30px] ">
                  <a className="menu-social" href="#">
                    <img
                      className="w-[24px] h-[24px] menu-social  cursor-pointer"
                      src={facebook}
                      alt="facebook logo"
                    />
                  </a>
                  <img
                    className="w-[24px] h-[24px] cursor-pointer"
                    src={twitter}
                    alt="twitter logo"
                  />
                  <img
                    className="w-[24px] h-[24px] cursor-pointer"
                    src={instagram}
                    alt="instagram logo"
                  />
                  <img
                    className="w-[24px] h-[24px] cursor-pointer"
                    src={globe}
                    alt="globe logo"
                  />
                </div>
                {/* Cookis and Privacy */}
                <div className="flex  items-center justify-center mt-[37px] text-[22px] font-primary font-bold">
                  <span className="mr-[10px] text-text_white cursor-pointer">
                    Cookies.
                  </span>{" "}
                  <span className="text-text_white">|</span>
                  <span className="text-text_white ml-[10px] cursor-pointer">
                    Privacy.
                  </span>
                </div>
                {/* underline */}
                <div className=" border-solid border-b-[1px] border-text_white border-opacity-[.5] mt-[30.5px]"></div>
                {/* Contact Details */}
                <div className="flex flex-col mt-[24.5px] text-text_white text-[14px] font-primary font-normal text-left">
                  <span className="mb-[6px] cursor-pointer">
                    S.und@themail.com
                  </span>
                  <span>+30 210 1234 567</span>
                  {/* Copywrite */}
                  <span className="mt-[26px] text-[12px] font-primary font-normal text-start">
                    © The standard Copywrite 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex font-primary font-bold">
        <span className="mr-[10px] text-text_white cursor-pointer">EN</span>
        <span className="text-dark_gray">|</span>
        <span className="text-dark_gray ml-[10px] cursor-pointer">GR</span>
      </div>
    </nav>
  );
};

export default NavBar;
