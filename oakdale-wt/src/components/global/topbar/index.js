import React from "react";
import logo from "./../../../images/OakdaleWindowTintLogo.jpg";
import { LandingLogo, HorizontalRule } from "./TopBarElements";

export const TopBar = () => {
  return (
    <div>
      <LandingLogo src={logo} />
      <HorizontalRule />
    </div>
  );
};
