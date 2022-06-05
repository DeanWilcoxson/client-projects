import React from "react";
import {
  FooterContainer,
  FooterText,
  FooterBold,
} from "./footerElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <FooterBold>Address:</FooterBold>
        924B West F St. Oakdale, CA 95361
      </FooterText>
      <FooterText>
        <FooterBold>Phone:</FooterBold>
        +1(209)-390-2578
      </FooterText>
    </FooterContainer>
  );
};
export default Footer;
