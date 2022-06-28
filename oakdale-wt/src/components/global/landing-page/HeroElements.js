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
  margin: 2.5rem;
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
  width: 90%;
  color: #5a6672;
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
  font-family: "50 Blizzards";
  font-size: 2rem;
  font-weight: bold;
  padding: 0.25rem;
  margin: 0.25rem;
  text-shadow: #80808091 1px 1px 2px;
  &:hover {
    color: #008000ab;
  }
`;
export const OptionImage = styled.img`
  width: 60%;
  border-radius: 10%;
  margin: 0.25rem;
  box-shadow: #5a6672 2px 2px 4px;
  &:hover {
    box-shadow: #008000ab -2.5px 2.5px 5px, #008000ab 2.5px -2.5px 5px;
  }
`;
