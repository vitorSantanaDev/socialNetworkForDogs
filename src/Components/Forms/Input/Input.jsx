import React from "react";
import * as S from "./styled";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <S.InputWrapper className="wrapper">
      <S.LabelInput htmlFor={name}>{label}</S.LabelInput>
      <S.InputElement
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <S.ErrorMessage className="error">{error}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};

export default Input;
