import React from "react";
import * as S from "./styled";

const Error = ({ error }) => {
  if (!error) return null;
  return <S.ErrorElment>{error}</S.ErrorElment>;
};

export default Error;
