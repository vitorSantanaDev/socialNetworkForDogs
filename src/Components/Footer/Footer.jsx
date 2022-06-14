import React from "react";

import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

import * as S from "./styled";

const Footer = () => {
  return (
    <S.FooterElement>
      <Dogs />
      <S.FooterContent>Dogs. Alguns direitos reservados</S.FooterContent>
    </S.FooterElement>
  );
};

export default Footer;
