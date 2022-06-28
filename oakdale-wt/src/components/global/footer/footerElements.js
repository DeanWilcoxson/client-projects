import styled from "styled-components";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdBusiness } from "react-icons/md";
export const FooterContainer = styled.div`
  border-top: 1px solid black;
  left: 0px;
  bottom: 0px;
  /* padding-bottom: 5rem; */
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
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const FooterBold = styled.b`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: darkgrey;
`;
export const FooterBusinessInfoBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* margin-top: 0.5rem; */
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
  padding: 0.5rem;
  font-size: 1rem;
  margin: 0.5rem;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 0.5rem;
  }
`;
export const FooterBusinessHourItemValue = styled.p`
  color: white;
  /* padding: 5px; */
  font-weight: 100;
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
  /* padding: 0.5rem; */
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
// export const MobileFooterPhoneIcon = styled(FaPhoneAlt)``;
// export const MobileFooterAddressIcon = styled(MdBusiness)``;
