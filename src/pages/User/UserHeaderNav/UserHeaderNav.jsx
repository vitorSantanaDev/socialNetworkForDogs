import React, { useContext, useState } from "react";
import { NavElement } from "./styled";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../context/useContext";
import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as PostarFotos } from "../../../Assets/adicionar.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const { mobile, setMobile } = useState(null);
  return (
    <NavElement>
      <NavLink to="/account" end>
        <MinhasFotos />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to="/account/post">
        <PostarFotos />
        {mobile && 'Postar'}
      </NavLink>
      <NavLink to="/account/statistics">
        <Estatisticas />
        {mobile && 'Estatisticas'}
      </NavLink>
      <button onClick={userLogout}>
        {' '}
        <Sair />
        {mobile && 'Sair'}
      </button>
    </NavElement>
  );
};

export default UserHeaderNav;
