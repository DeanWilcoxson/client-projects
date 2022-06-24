import React from "react";
import logo from "./../../../images/OakdaleWindowTintLogo.jpg";
import { TopContainer, LandingLogo, HorizontalRule } from "./TopBarElements";
import MobileNav from '../mobile-nav/MobileNav'

export const TopBar = () => {
  return (
    <div>
      <TopContainer>
        <div className="above-400-width">

          <LandingLogo src={logo} />
          <HorizontalRule />

        </div>

        <div className="400-width-and-below">
          <MobileNav />
        </div>
      </TopContainer>
    </div>




  );
};
