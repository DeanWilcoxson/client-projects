import React from "react";
import logo from "./../../../images/OakdaleWindowTintLogo.jpg";
import { TopContainer, LandingLogo, HorizontalRule } from "./TopBarElements";

export const TopBar = () => {
  return (
    <TopContainer>
      <LandingLogo src={logo} />
      <HorizontalRule />
    </TopContainer>
  );
};
