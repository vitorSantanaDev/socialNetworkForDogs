import React from "react";
import { InputElement, WrapperDiv } from "./styled";

const Input = ({ label, type, name }) => {
  return (
    <WrapperDiv className="wrapper">
      <label htmlFor={name}>{label}</label>
      <InputElement id={name} name={name} type={type}/>
      <p className="error">Error</p>
    </WrapperDiv>
  );
};

export default Input;
