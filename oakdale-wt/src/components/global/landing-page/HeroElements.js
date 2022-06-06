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
export const LandingLogo = styled.img`
  width: 20%;
`;
export const LandingBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;
`;
export const OptionBox = styled.div`
  width: 33.3%;
  text-align: center;
`;
export const Option = styled.span`
  color: black;
  &:hover {
    color: green;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
export const OptionText = styled.a`
  text-decoration: none;
  font-family: "50 Blizzards";
  font-size: 20px;
  padding: 20px;
`;
export const OptionImage = styled.img`
  width: 60%;
  border-radius: 25%;
`;
export const HorizontalRule = styled.hr`
  width: 90%;
`;
