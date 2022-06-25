import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { MdBusiness } from "react-icons/md";
export const FooterContainer = styled.div`
  border-top: 2px solid black;
  left: 0px;
  bottom: 0px;
  padding-bottom: 1rem;
  width: 100%;
  background-color: #252525;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
export const FooterText = styled.p`
  color: white;
  text-align: center;
  padding: 0.5rem;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const FooterBold = styled.b`
  margin: 10px;
  color: darkgrey;
`;
export const FooterBusinessInfoBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const FooterBusinessHoursList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-wrap: wrap;
  }
`;
export const FooterBusinessHourItem = styled.li`
  list-style-type: none;
  color: darkgrey;
  font-weight: bold;
  padding: .5rem;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 0.5rem;
  }
`;
export const FooterBusinessHourItemValue = styled.p`
  color: white;
  padding: 5px;
  font-weight: 100;
`;
export const FooterEstimate = styled.p`
  background-color: yellow;
  width: 100%;
  padding: 2.5px;
  text-align: center;
  color: black;
  font-style: italic;
  font-weight: bolder;
  z-index: 10;
`;
export const FooterCopyright = styled.p`
  color: white;
  text-align: center;
  padding: 0.5rem;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const MobileFooterPhoneIcon = styled(FaPhoneAlt)``;
export const MobileFooterAddressIcon = styled(MdBusiness)``;
