import React from "react";
import * as S from "./styled";

const Button = ({ children, ...props }) => {
  return <S.ButtonElement {...props}>{children}</S.ButtonElement>;
};

export default Button;
