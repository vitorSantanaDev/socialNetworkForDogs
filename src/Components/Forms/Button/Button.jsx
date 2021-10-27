import React from "react";
import { ButtonElement } from "./styled";

const Button = ({ children, ...props }) => {
  return <ButtonElement {...props}>{children}</ButtonElement>;
};

export default Button;
