import React from "react";
import logo from "./../../../images/OakdaleWindowTintLogo.jpg";
import {
  TopContainer,
  LandingLogo,
  HorizontalRule,
  Topbar,
} from "./TopBarElements";
import MobileNav from "./mobile-nav";

export const TopBar = () => {
  return (
    <TopContainer>
      <Topbar>
        <LandingLogo src={logo} />
        <MobileNav />
      </Topbar>
      <HorizontalRule />
    </TopContainer>
  );
};
