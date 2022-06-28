import React from "react";
import { NavContainer, NavLink } from "./NavElements";

const ParentNav = () => {
  return (
    <NavContainer>
      <NavLink>Home</NavLink>
      <NavLink>Gallery</NavLink>
      <NavLink>Home</NavLink>
    </NavContainer>
  );
};
export default ParentNav;
