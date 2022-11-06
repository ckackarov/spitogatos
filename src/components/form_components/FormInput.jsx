import React from "react";
import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  // destructure props
  const { id, errorMsg, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="input-container mb-[36px] flex flex-col">
      <input
        className="input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="error">{errorMsg}</span>
    </div>
  );
};

export default FormInput;
