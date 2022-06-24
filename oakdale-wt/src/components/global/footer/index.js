import React from "react";
import {
  FooterContainer,
  FooterText,
  FooterBold,
  FooterBusinessInfoBox,
  FooterBusinessHoursList,
  FooterBusinessHourItem,
  FooterBusinessHourItemValue,
  FooterEstimate,
  FooterCopyright
  // MobileFooterAddressIcon,
  // MobileFooterPhoneIcon,
} from "./footerElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterEstimate>Free Estimates!! Call Anytime!!</FooterEstimate>
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
      <FooterBusinessHoursList>
        <FooterBusinessHourItem>
          Monday:
          <FooterBusinessHourItemValue>
            Appointment Only
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          Tuesday:
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          Wednesday:
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          Thursday:
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          Friday:
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          Saturday:
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          Sunday:
          <FooterBusinessHourItemValue>
            Appointment Only
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
      </FooterBusinessHoursList>
      <FooterCopyright>
        <FooterBold>&copy; Dean Wilcoxson/ Bryan Huffstutler 2022</FooterBold>
      </FooterCopyright>
    </FooterContainer>
  );
};
export default Footer;
