import React from "react";
import { useState } from "react";

const Options = () => {
  const [onlyOne, setOnlyOne] = useState("one");

  return (
    <div className="w-full flex flex-col items-left">
      <p className="text-[16px] leading-[21px]">
        Please select at least one of the following:
      </p>

      <div className="flex mt-[20px]">
        <input
          className="w-[24px] mr-[16px]"
          type="checkbox"
          checked={onlyOne === "one"}
          onChange={() => setOnlyOne("one")}
        />
        <span className="text-[16px] font-medium mr-[37px] ">Option 1</span>
        <input
          className="w-[24px] mr-[16px]"
          type="checkbox"
          checked={onlyOne === "two"}
          onChange={() => setOnlyOne("two")}
        />
        <span className="text-[16px] font-medium">Option 2</span>
      </div>
    </div>
  );
};

export default Options;
