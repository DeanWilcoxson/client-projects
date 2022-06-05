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
import { Link } from 'react-router-dom'


const Landing = () => {
  return (

    <LandingContainer>
      <LandingLogo src={logo} />

      <LandingBox>
        <OptionsBox>
          <Link to='/automotive'>
            <OptionsButton>
              <OptionsImage src={car} />
              <OptionsText>Automotive</OptionsText>
            </OptionsButton>
          </Link>

        </OptionsBox>
        <OptionsBox>
          <Link to='/commercial'>
            <OptionsButton>
              <OptionsImage src={business} />
              <OptionsText>Commercial</OptionsText>
            </OptionsButton>
          </Link>

        </OptionsBox>
        <OptionsBox>
          <Link to='/residential'>
            <OptionsButton>
              <OptionsImage src={house} />
              <OptionsText>Residential</OptionsText>
            </OptionsButton>
          </Link>
        </OptionsBox>

      </LandingBox>


    </LandingContainer>

  );
};
export default Landing;
