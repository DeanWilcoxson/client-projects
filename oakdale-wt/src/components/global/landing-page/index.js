import React from "react";
// import {Routes, Route} from 'react-router-dom'
import {
  LandingContainer,
  LandingBox,
  OptionBox,
  Option,
  OptionText,
  OptionImage,
} from "./HeroElements";
import car from "./../../../images/CarTint.jpg";
import house from "./../../../images/ResidentialTint.jpg";
import business from "./../../../images/BusinessTint.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingBox>
        <OptionBox>
          <Link to="/automotive">
            <Option>
              <OptionImage src={car} />
              <OptionText>AUTOMOTIVE</OptionText>
            </Option>
          </Link>
        </OptionBox>
        <hr />
        <OptionBox>
          <Link to="/commercial">
            <Option>
              <OptionImage src={business} />
              <OptionText>COMMERCIAL</OptionText>
            </Option>
          </Link>
        </OptionBox>
        <hr />
        <OptionBox>
          <Link to="/residential">
            <Option>
              <OptionImage src={house} />
              <OptionText>RESIDENTIAL</OptionText>
            </Option>
          </Link>
        </OptionBox>
      </LandingBox>
    </LandingContainer>
  );
};
export default Landing;
