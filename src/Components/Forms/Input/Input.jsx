import React from "react";
import { InputElement, WrapperDiv } from "./styled";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <WrapperDiv className="wrapper">
      <label htmlFor={name}>{label}</label>
      <InputElement
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </WrapperDiv>
  );
};

export default Input;
