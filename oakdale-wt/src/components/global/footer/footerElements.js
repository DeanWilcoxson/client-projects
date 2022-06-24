import styled from "styled-components";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
export const FooterContainer = styled.div`
  border-top: 2px solid black;
  left: 0px;
  bottom: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  background-color: #252525;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterText = styled.p`
  color: white;
  text-align: center;
  padding: 5px;
`;
export const FooterBold = styled.b`
  margin: 10px;
  color: darkgrey;
`;
export const FooterBusinessInfoBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5rem;
`;
export const FooterBusinessHoursList = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
`;
export const FooterBusinessHourItem = styled.li`
  list-style-type: none;
  color: darkgrey;
  font-weight: bold;
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
