import styled from "styled-components";
import "./../../../notes/50 Blizzards.ttf";
export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export const LandingBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
  padding-bottom: 1.8rem;
  @media screen and (max-width: 769px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;
export const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 33.3%;
  text-align: center;
  @media screen and (max-width: 769px) {
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
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
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const OptionText = styled.a`
  text-decoration: none;
  font-family: "50 Blizzards";
  font-size: 2rem;
  font-weight: bold;
  padding: 0.25rem;
  margin: 0.25rem;
  margin-left: 3rem;
  text-shadow: #80808091 1px 1px 2px;
  &:hover {
    color: #008000ab;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;
export const OptionImage = styled.img`
  margin-left: 2.5rem;
  width: 60%;
  border-radius: 10%;
  box-shadow: #5a6672 2px 2px 4px;
  &:hover {
    box-shadow: #008000ab -2.5px 2.5px 5px, #008000ab 2.5px -2.5px 5px;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
