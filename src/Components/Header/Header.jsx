import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderElement } from "./styled";
import { ReactComponent as Logo } from "../../Assets/dogs.svg";
import { UserContext } from "../../context/useContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <HeaderElement>
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
    </HeaderElement>
  );
};

export default Header;
