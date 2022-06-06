import React from "react";
import {
  FooterContainer,
  FooterText,
  FooterBold,
  FooterBusinessInfoBox,
} from "./footerElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterBusinessInfoBox>
        <FooterText>
          <FooterBold>Address:</FooterBold>
          924B West F St. Oakdale, CA 95361
        </FooterText>
        <FooterText>
          <FooterBold>Phone:</FooterBold>
          +1 (209) - 390 - 2578
        </FooterText>
      </FooterBusinessInfoBox>
      <FooterText>
        <FooterBold>&copy; Dean Wilcoxson/ Bryan Huffstutler 2022</FooterBold>
      </FooterText>
    </FooterContainer>
  );
};
export default Footer;
