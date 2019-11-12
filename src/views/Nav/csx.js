import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  ${props =>
    props["data-active"] === true ? "border-bottom: 1px solid white;" : ""};
`;

export const Logo = styled(Link)`
  text-transform: uppercase;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavWrapper = styled.div`
  position: absolute;
  padding: 1em 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  ${NavLink},
  ${Logo} {
    color: white;
    text-decoration: none;

    &:hover {
      opacity: 0.75;
    }

    &:active {
      opacity: 0.5;
    }

    &:not(:first-child) {
      margin-left: 1em;
    }
  }
`;
