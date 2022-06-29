import React from "react";
import {
  FooterContainer,
  // FooterText,
  FooterBold,
  FooterBusinessInfoBox,
  FooterBusinessHoursList,
  FooterBusinessHourItem,
  FooterBusinessHourKey,
  FooterBusinessHourItemValue,
  FooterEstimate,
  FooterCopyright,
  FooterBusinessInfoItem,
  FooterBusinessInfoKey,
  FooterBusinessInfoValue,
  // MobileFooterAddressIcon,
  // MobileFooterPhoneIcon,
} from "./footerElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterEstimate>Free Estimates!! Call Anytime!!</FooterEstimate>
      <FooterBusinessInfoBox>
        <FooterBusinessInfoItem>
          <FooterBusinessInfoKey>Address:</FooterBusinessInfoKey>
          <FooterBusinessInfoValue>
            924B West F St. Oakdale, CA 95361
          </FooterBusinessInfoValue>
        </FooterBusinessInfoItem>
        <FooterBusinessInfoItem>
          <FooterBusinessInfoKey>Phone:</FooterBusinessInfoKey>
          <FooterBusinessInfoValue>
            +1 (209) - 390 - 2578
          </FooterBusinessInfoValue>
        </FooterBusinessInfoItem>
      </FooterBusinessInfoBox>
      <FooterBusinessHoursList>
        <FooterBusinessHourItem>
          <FooterBusinessHourKey>Monday:</FooterBusinessHourKey>
          <FooterBusinessHourItemValue>
            Appointment Only
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          <FooterBusinessHourKey>Tuesday:</FooterBusinessHourKey>
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          <FooterBusinessHourKey>Wednesday:</FooterBusinessHourKey>
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          <FooterBusinessHourKey>Thursday:</FooterBusinessHourKey>
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          <FooterBusinessHourKey>Friday:</FooterBusinessHourKey>
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          <FooterBusinessHourKey>Saturday:</FooterBusinessHourKey>
          <FooterBusinessHourItemValue>
            9:00am - 5:00pm
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
        <FooterBusinessHourItem>
          <FooterBusinessHourKey>Sunday:</FooterBusinessHourKey>
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
