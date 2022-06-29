import styled from "styled-components";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdBusiness } from "react-icons/md";
export const FooterContainer = styled.div`
  border-top: 1px solid black;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color: #252525;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
export const FooterBusinessInfoBox = styled.ul`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 769px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const FooterBusinessInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  color: darkgrey;
  font-weight: bold;
  font-size: 1rem;
  margin: 0.5rem;
  @media screen and (max-width: 769px) {
    font-size: 12px;
    padding: 0.5rem;
  }
  @media screen and (max-width: 400px) {
    flex-direction: row;
    padding: 0;
    margin: 0;
  }
`;
export const FooterBusinessInfoKey = styled.p`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: darkgrey;
`;
export const FooterBusinessInfoValue = styled.p`
  color: white;
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;
export const FooterBusinessHoursList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 770px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-wrap: wrap;
  }
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const FooterBold = styled.b`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: darkgrey;
`;
export const FooterBusinessHourItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  color: darkgrey;
  font-weight: bold;
  font-size: 1rem;
  margin: 0.5rem;
  @media screen and (max-width: 769px) {
    font-size: 12px;
    padding: 0.5rem;
  }
  @media screen and (max-width: 400px) {
    flex-direction: row;
    padding: 0;
    margin: 0;
  }
`;
export const FooterBusinessHourKey = styled.p`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: darkgrey;
`;
export const FooterBusinessHourItemValue = styled.p`
  color: white;
  font-weight: 100;
  padding: 0.5rem;
  margin: 0.5rem;
  @media screen and (max-width: 400px) {
    margin: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
  }
`;
export const FooterEstimate = styled.p`
  background-color: yellow;
  width: 99.45%;
  padding: 0.25rem;
  text-align: center;
  color: black;
  font-style: italic;
  font-weight: bolder;
  font-size: 1.25rem;
  z-index: 10;
`;
export const FooterCopyright = styled.p`
  color: white;
  text-align: center;
  padding-bottom: 1.25rem;
  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
  @media screen and (max-width: 400px) {
  }
`;
// export const MobileFooterPhoneIcon = styled(FaPhoneAlt)``;
// export const MobileFooterAddressIcon = styled(MdBusiness)``;
