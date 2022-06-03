import React from "react";
import {
  LandingContainer,
  LandingLogo,
  LandingBox,
  OptionsBox,
  OptionsButton,
  OptionsText,
  OptionsImage,
} from "./HeroElements";
import car from "./../../../images/CarTint.jpg";
import house from "./../../../images/ResidentialTint.jpg";
import business from "./../../../images/BusinessTint.jpg";
import logo from "./../../../images/OakdaleWindowTintLogo.jpg";
const Landing = () => {
  return (
    <LandingContainer>
      <LandingLogo src={logo} />
      <LandingBox>
        <OptionsBox>
          <OptionsButton>
            <OptionsImage src={car} />
            <OptionsText>Automotive</OptionsText>
          </OptionsButton>
        </OptionsBox>
        <OptionsBox>
          <OptionsButton>
            <OptionsImage src={business} />
            <OptionsText>Commercial</OptionsText>
          </OptionsButton>
        </OptionsBox>
        <OptionsBox>
          <OptionsButton>
            <OptionsImage src={house} />
            <OptionsText>Residential</OptionsText>
          </OptionsButton>
        </OptionsBox>
      </LandingBox>
    </LandingContainer>
  );
};
export default Landing;
