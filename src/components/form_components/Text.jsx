import React from "react";
import { useState } from "react";

const Text = () => {
  const [inputText, setInputText] = useState("");
  const [characterLimit] = useState(100);
  // event handler
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="w-full flex flex-col ">
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Message"
        maxLength={characterLimit}
        className="mb-3 w-full px-[28px] py-[11px] h-[144px] border-[1px] rounded-[28px]"
      ></textarea>
      <div className="text-check  text-right py-2 px-4 rounded-[28px]  ">
        {inputText.length} / {characterLimit}
      </div>
    </div>
  );
};

export default Text;
