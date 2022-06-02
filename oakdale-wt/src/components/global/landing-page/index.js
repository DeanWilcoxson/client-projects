import React from "react";
import {
  LandingContainer,
  LandingBox,
  OptionsBox,
  OptionsButton,
  OptionsText,
} from "./HeroElements";
const Landing = () => {
  return (
    <LandingContainer>
      <LandingBox>
        <OptionsBox>
          <OptionsButton>
            <OptionsText></OptionsText>
          </OptionsButton>
        </OptionsBox>
        <OptionsBox>
          <OptionsButton>
            <OptionsText></OptionsText>
          </OptionsButton>
        </OptionsBox>
        <OptionsBox>
          <OptionsButton>
            <OptionsText></OptionsText>
          </OptionsButton>
        </OptionsBox>
      </LandingBox>
    </LandingContainer>
  );
};
export default Landing;
