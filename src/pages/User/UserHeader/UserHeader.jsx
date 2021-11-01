import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { H1Element } from "../../../Components/Titles/H1/H1";
import UserHeaderNav from "../UserHeaderNav/UserHeaderNav";
import { HeaderElement } from "./styled";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/account/post":
        setTitle("Poste sua foto");
        break;
      case "/account/statistics":
        setTitle("Estatisticas");
        break;
      default:
        setTitle("Minha conta")
    }
  }, [location]);

  return (
    <HeaderElement>
      <H1Element>{title}</H1Element>
      <UserHeaderNav />
    </HeaderElement>
  );
};

export default UserHeader;
