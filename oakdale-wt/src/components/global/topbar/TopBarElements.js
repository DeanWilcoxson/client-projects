import styled from "styled-components";
export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  top: 0px;
  left: 0px;
  position: sticky;
  z-index: 1000;
  background-color: white;
  @media screen and (max-width: 400px) {
  }
`;
export const Topbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const LandingLogo = styled.img`
  width: 15%;
  cursor: pointer;
  margin: 5px;
  margin-left: 5rem;
  @media screen and (max-width: 768px) {
    width: 30%;
    margin-left: 2rem;
  }
`;
export const HorizontalRule = styled.hr`
  width: 90%;
`;
