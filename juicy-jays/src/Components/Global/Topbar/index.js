import React from "react";
import {
  TopbarContainer,
  TopbarLogo,
  TopbarHeader,
  TopbarSubheader,
  TopbarNav,
  TopbarLink,
} from "./topbarElements";
const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarLogo>
        <TopbarHeader>Juicy Jays</TopbarHeader>
        <TopbarSubheader>Tobacco & More</TopbarSubheader>
      </TopbarLogo>
      <TopbarNav>
        <TopbarLink>Gallery</TopbarLink>
        <TopbarLink>Contact</TopbarLink>
      </TopbarNav>
    </TopbarContainer>
  );
};
export default Topbar;
