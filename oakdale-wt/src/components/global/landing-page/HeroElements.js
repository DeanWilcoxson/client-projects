import styled from "styled-components";
export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
export const LandingLogo = styled.img`
  width: 30%;
`;
export const LandingBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const OptionsBox = styled.div`
  width: 33.3%;
  text-align: center;
`;
export const OptionsButton = styled.a`
  &:hover {
    color: blue;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
export const OptionsText = styled.b``;
export const OptionsImage = styled.img`
  width: 50%;
  /* height: 25%; */
  border-radius: 50%;
`;
