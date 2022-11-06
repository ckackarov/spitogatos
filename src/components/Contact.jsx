import React, { useState } from "react";

// Import Data
import { main2 } from "../components/constants/data";

// Import Image
import { facebook, globe, instagram, mapBig, twitter } from "../images/index";

// Import Form Component
import FormInput from "./form_components/FormInput";
import Categories from "./form_components/Categories";
import Text from "./form_components/Text";
import Options from "./form_components/Options";

const Contact = () => {
  const [dotClick, setDotClick] = useState(false);
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  const handleShow = () => {
    setDotClick(true);
  };

  console.log(dotClick);

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name*",
      errorMsg: "Full name should contain only letters",
      pattern: "^[A-Za-z]+$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email*",
      errorMsg: "It should be a valid Email address",

      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Phone*",
      pattern: "^[0-9]+$",
      errorMsg: "It should contain  only numbers",
      required: true,
    },
  ];

  // Destructure
  const { text2, title2 } = main2;

  // submit form function
  const handleForm = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-light_gray flex flex-col md:flex-row-reverse md:mt-[216px] md:max-w-[1024px] xl:max-w-[1920px]  md:mx-auto xl:px-0 xl:py-0 transition-all xl:mx-auto ">
      <div className="px-[24px]">
        {/* Text */}
        <div className="pt-[36px] xl:pt-[68px] ">
          <span className="title leading-[34px] xl:leading-[39px]">
            {title2}
          </span>
          <p className="mainText mt-[32px] md:mt-[32px] leading-[26px]  ">
            {text2}
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleForm} className="form ">
          {inputs.map((input) => (
            <FormInput
              className="input"
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          {/* Categories */}
          <Categories />

          {/* Text Area */}
          <Text />

          {/* Options */}
          <Options />

          <button className="btn btn-hover  btn-active min-w-[328px]">
            SUBMIT
          </button>
        </form>
      </div>
      {/* Map */}

      <div className="min-w-[360px] h-[296px] md:w-[1390px] md:h-[1032px]  mt-[40px] md:mt-0 md:mb-0 overflow-y-hidden    relative">
        <img
          className="w-[728px] h-[540px] md:w-[856px] md:h-[1032px] object-cover image-scale   "
          src={mapBig}
          alt=""
        />
        {/* Green dot */}
        <span onClick={handleShow} className="green-dot"></span>
        {/* Green dot clicked*/}
        {dotClick && (
          <div onClick={() => setDotClick(false)} className="green-dot-clicked">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[16px] mt-[89.42px] font-medium leading-[19px]">
                S.und@themail.com
              </span>
              <span className="text-[16px] mt-[24px] font-medium leading-[19px]">
                +30 210 1234 567
              </span>

              {/* Social links */}
              <div className="flex px-[49px] items-center justify-evenly w-full mt-[36.69px]">
                <a className="social" href="#">
                  <img className="social" src={instagram} alt="" />
                </a>
                <a className="social" href="#">
                  <img className="social" src={twitter} alt="" />
                </a>
                <a className="social" href="#">
                  <img className="social" src={facebook} alt="" />
                </a>
                <a className="social" href="#">
                  <img className="social" src={globe} alt="" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
