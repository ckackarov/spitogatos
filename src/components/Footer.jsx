import React from "react";

// import logo
import { logoSmall } from "../images/index";
console.log(logoSmall);

const Footer = () => {
  return (
    <div className="bg-bg_black h-[40px] md:h-[48px] flex justify-center -z-50   ">
      <div className="flex items-center px-[24px] md:px-[72px] justify-between w-full">
        <div className="text-text_white text-[12px] font-medium md:text-[16px] md:leading-[19px]">
          © The standard Copywrite 2020
        </div>
        <div className="text-text_white text-[18px] leading-[15px] px-[24px] py-[13px] hidden md:block font-extrabold md:leading-[22px]">
          Cookies. | Privacy.
        </div>
        <div className="">
          <img
            className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] object-scale-down mt-3 md:mt-0"
            src={logoSmall}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
