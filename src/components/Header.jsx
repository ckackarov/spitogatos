import React from "react";

// import images
import {
  bgBig_1,
  bgSmall_1,
  bgBig_2,
  bgSmall_2,
  bgBig_3,
  bgSmall_3,
} from "../images/index";

// Import data
import { heroData } from "./constants/data";

const Header = () => {
  // heroData destructure
  const { text, title } = heroData;

  return (
    <section>
      <div className="bgLayout1 bgLayout2 relative xl:max-h-[1080px]  ">
        {/* image */}
        <img
          className=" min-h-[356px] w-full  lg:max-h-[1016px] object-cover mix-blend-multiply "
          src={bgBig_1}
          alt=""
        />
        {/* text */}
        <div className="absolute top-0 mt-[73px] px-[24px] lg:h-[378px] lg:ml-[125px] xl:ml-[252px] lg:mt-[190px] xl:mt-[384px]">
          <h1 className="relative heroTitle greenLine  mb-[56px]">S.und Co</h1>
          <p className="heroText leading-[24px]   max-w-[312px] lg:max-w-[576px]">
            To take a trivial example, which of us ever undertakes laborious
            physical exercise, except to obtain some advantage from it?
          </p>
        </div>
        {/* bullets */}
        <div className="absolute bottom-0 left-[0] right-0 mx-auto flex items-center justify-center space-x-[12px] pb-[16px]">
          <div className="border h-[12px] w-[12px] rounded-full bg-bg_white"></div>
          <div className="border h-[12px] w-[12px] rounded-full bg-dark_gray"></div>
          <div className="border h-[12px] w-[12px] rounded-full bg-dark_gray"></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
