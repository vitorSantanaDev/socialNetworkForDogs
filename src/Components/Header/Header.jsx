import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/useContext";

import { ReactComponent as Logo } from "../../Assets/dogs.svg";

import * as S from "./styled";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <S.HeaderElement>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs">
          <Logo />
        </Link>
        {data ? (
          <Link className="login" to="/account">
            {data.nome}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login/User
          </Link>
        )}
      </nav>
    </S.HeaderElement>
  );
};

export default Header;
