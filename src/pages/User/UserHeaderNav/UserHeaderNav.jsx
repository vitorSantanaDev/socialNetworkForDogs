import React, { useContext, useEffect, useState } from "react";
import { MobileButton, NavElement } from "./styled";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../context/useContext";
import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as PostarFotos } from "../../../Assets/adicionar.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";
import useMedia from "../../../hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation()

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <MobileButton
          aria-label="MenuMobile"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={mobileMenu && "mobileMenuActive"}
        ></MobileButton>
      )}
      <NavElement
        className={`${mobile ? "navMobile" : "navMenu"} ${
          mobileMenu && "mobileMenuActive"
        }`}
      >
        <NavLink to="/account" end>
          <MinhasFotos />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/account/post">
          <PostarFotos />
          {mobile && "Postar"}
        </NavLink>
        <NavLink to="/account/statistics">
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <button onClick={userLogout}>
          {" "}
          <Sair />
          {mobile && "Sair"}
        </button>
      </NavElement>
    </>
  );
};

export default UserHeaderNav;
