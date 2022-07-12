import React from "react";
import { LandingContainer, LandingBox } from "./LandingElements";
import Topbar from "../Topbar";
const Landing = () => {
  return (
    <LandingContainer>
      <Topbar />
      <LandingBox></LandingBox>
    </LandingContainer>
  );
};
export default Landing;
