import React from "react";
import {
  LandingContainer,
  LandingBox,
  OptionsBox,
  OptionsButton,
  OptionsText,
  OptionsImage,
} from "./HeroElements";
import car from "./../../../images/CarTint.jpg";
import house from "./../../../images/ResidentialTint.jpg";
import business from "./../../../images/BusinessTint.jpg";
const Landing = () => {
  return (
    <LandingContainer>
      <LandingBox>
        <OptionsBox>
          <OptionsButton>
            <OptionsImage src={car} />
            <OptionsText>Automotive</OptionsText>
          </OptionsButton>
        </OptionsBox>
        <OptionsBox>
          <OptionsButton>
            <OptionsImage src={house} />
            <OptionsText>Residential</OptionsText>
          </OptionsButton>
        </OptionsBox>
        <OptionsBox>
          <OptionsButton>
            <OptionsImage src={business} />
            <OptionsText>Commercial</OptionsText>
          </OptionsButton>
        </OptionsBox>
      </LandingBox>
    </LandingContainer>
  );
};
export default Landing;
