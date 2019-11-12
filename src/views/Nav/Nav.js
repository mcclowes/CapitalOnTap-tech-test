import React from "react";
import { NavWrapper, NavLink } from "./csx";

const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to="/" data-active={window.location.pathname === "/"}>
        Books
      </NavLink>

      <NavLink to="/about" data-active={window.location.pathname === "/about"}>
        About
      </NavLink>

      {/* basket goes here */}
    </NavWrapper>
  );
};

export default Nav;
