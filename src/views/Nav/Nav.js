import React from "react";
import { NavWrapper, NavLinks, NavLink, Logo } from "./csx";

const Nav = () => {
  const activePage = window.location.pathname;

  return (
    <NavWrapper>
      <Logo to="/" data-active={activePage === "/"}>
        Books On Tap
      </Logo>

      <NavLinks>
        <NavLink to="/" data-active={activePage === "/"}>
          Books
        </NavLink>

        <NavLink to="/about" data-active={activePage === "/about"}>
          About
        </NavLink>
      </NavLinks>

      {/* basket goes here */}
    </NavWrapper>
  );
};

export default Nav;
