import styled from "styled-components";
export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
  top: 0px;
  left: 0px;
  position: sticky;
  z-index: 1000;
  background-color: white;
`;
export const Topbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const LandingLogo = styled.img`
  width: 15%;
  cursor: pointer;
  margin: 5px;
  margin-left: 5rem;
  @media screen and (max-width: 770px) {
    width: 35%;
    margin-left: 1rem;
  }
  @media screen and (max-width: 400px) {
    width: 50%;
  }
`;
export const HorizontalRule = styled.hr`
  width: 99%;
`;
