import React from "react";

// import data
import { main1 } from "../components/constants/data";
import { main2 } from "../components/constants/data";

const Main_Grid = () => {
  const { image, imageXl, subTitle, text, title } = main1;
  const { image2, subTitle2, text2, title2 } = main2;

  return (
    <section className="px-[24px] pt-[32px] pb-[33px] md:max-w-[1024px] xl:max-w-[1920px]  md:mx-auto xl:px-0 xl:py-0 transition-all xl:mx-auto">
      <div className="grid grid-cols-1  md:grid-container-md xl:grid-container-xl ">
        {/* Image 1 */}
        <div className=" place-self-center  md:image-md-1  xl:image-xl-1  ">
          <img
            className="xl:min-w-[696px]  object-cover"
            src={image}
            alt="girl"
          />
        </div>

        {/* text 1 */}

        <div className=" flex flex-col md:text-md-1 xl:text-xl-1   ">
          <span className="leading-[18px] xl:leading-[19px] mt-[33px] md:mt-0 subTitle">
            {subTitle}
          </span>
          <span className="title leading-[34px] xl:leading-[39px]">
            {title}
          </span>
          <p className="mainText mt-[22px] md:mt-[32px] leading-[26px]   ">
            {text}
          </p>
        </div>

        {/* ******** */}

        {/* Image 2 */}
        <div className=" place-self-center mt-[37px] md:mt-0 md:image-md-2 xl:image-xl-2  ">
          <img className="object-cover " src={image2} alt="pillow" />
        </div>

        {/* text 2 */}

        <div className=" flex flex-col md:text-md-2 place-items-start xl:text-xl-2 mb-[24px]  ">
          <span className="mt-[33px] md:mt-0 subTitle leading-[18px] xl:leading-[19px]">
            {subTitle2}
          </span>
          <span className="title leading-[34px] xl:leading-[39px]">
            {title2}
          </span>
          <p className="mainText mt-[32px] md:mt-[32px] leading-[26px]  ">
            {text2}
          </p>

          {/* Button */}
          <button className="btn btnShadow btn-hover btn-active ">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main_Grid;
