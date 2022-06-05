import React from "react";
import {
  LandingContainer,
  LandingLogo,
  LandingBox,
  OptionBox,
  Option,
  OptionText,
  OptionImage,
  HorizontalRule,
} from "./HeroElements";
import car from "./../../../images/CarTint.jpg";
import house from "./../../../images/ResidentialTint.jpg";
import business from "./../../../images/BusinessTint.jpg";
import logo from "./../../../images/OakdaleWindowTintLogo.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingLogo src={logo} />
      <HorizontalRule />
      <LandingBox>
        <OptionBox>
          <Link to="/automotive">
            <Option>
              <OptionImage src={car} />
              <OptionText>Automotive</OptionText>
            </Option>
          </Link>
        </OptionBox>
        <hr />
        <OptionBox>
          <Link to="/commercial">
            <Option>
              <OptionImage src={business} />
              <OptionText>Commercial</OptionText>
            </Option>
          </Link>
        </OptionBox>
        <hr />
        <OptionBox>
          <Link to="/residential">
            <Option>
              <OptionImage src={house} />
              <OptionText>Residential</OptionText>
            </Option>
          </Link>
        </OptionBox>
      </LandingBox>
    </LandingContainer>
  );
};
export default Landing;
