import React from "react";
import logo from "./../../../images/OakdaleWindowTintLogo.jpg";
import {
  TopContainer,
  LandingLogo,
  HorizontalRule,
  Topbar,
} from "./TopBarElements";
import MobileNav from "./mobileNavbar";

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
