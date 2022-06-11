import React from "react";
import {
  FooterContainer,
  FooterText,
  FooterBold,
  FooterBusinessInfoBox,
  FooterBusinessHoursList,
  FooterBusinessHourItem,
  FooterBusinessHourItemValue,
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
      <FooterBusinessHoursList>
        <FooterBusinessHourItem>
          Sunday:
          <FooterBusinessHourItemValue>
            Appointment Only
          </FooterBusinessHourItemValue>
        </FooterBusinessHourItem>
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
      </FooterBusinessHoursList>
      <FooterText>
        <FooterBold>&copy; Dean Wilcoxson/ Bryan Huffstutler 2022</FooterBold>
      </FooterText>
    </FooterContainer>
  );
};
export default Footer;
