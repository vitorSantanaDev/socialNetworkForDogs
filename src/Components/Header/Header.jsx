import React from "react";
import { Link } from "react-router-dom";
import { HeaderElement } from "./styled";
import { ReactComponent as Logo } from "../../Assets/dogs.svg";

const Header = () => {
  return (
    <HeaderElement>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs">
          <Logo />
        </Link>
        <Link className="login" to="/login">Login/User</Link>
      </nav>
    </HeaderElement>
  );
};

export default Header;
