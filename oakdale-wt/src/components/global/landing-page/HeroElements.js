// import {Route} from "react-router-dom";
import styled from "styled-components";
import "./../../../notes/50 Blizzards.ttf";
export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
export const LandingBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
  }
`;
export const OptionBox = styled.div`
  width: 33.3%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
export const Option = styled.div`
  width: 105%;
  color: #253545b2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &:hover {
    color: #008000ab;
  }
`;
export const OptionText = styled.a`
  text-decoration: none;
  font-style: italic;
  font-family: "50 Blizzards";
  font-size: 20px;
  text-shadow: #25354576 1px 1px 2px;
  &:hover {
    color: #008000ab;
  }
`;
export const OptionImage = styled.img`
  width: 55%;
  border-radius: 10%;
  margin: 1rem;
  box-shadow: grey 5px 5px 5px;
  &:hover {
    box-shadow: #008000ab -2.5px 2.5px 5px, #008000ab 2.5px -2.5px 5px;
  }
`;
