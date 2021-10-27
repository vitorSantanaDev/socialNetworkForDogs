import React from "react";
import { Link } from "react-router-dom";
import { HeaderElement } from "./styled";

const Header = () => {
  return (
    <HeaderElement className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login/User</Link>
      </nav>
    </HeaderElement>
  );
};

export default Header;
