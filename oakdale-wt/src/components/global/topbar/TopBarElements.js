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
    .above-400-width {
      display: none;
    }
    
    display: flex;
    justify-content: end;
    align-items: flex-end;

    #mob-nav-icon {
      padding: 10px;
      color: black;
      font-weight: 900;
      font-size: 1.2em;
      a {
        text-decoration: none;
        background-color: #FA6B0A;
        margin: 6px;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        :visited {color: inherit}
      }
    }

    #mob-nav-links {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      z-index: 1000;
    }
  }
`;
export const LandingLogo = styled.img`
  width: 20%;
  cursor: pointer;
  margin-bottom: 5px;
`;
export const HorizontalRule = styled.hr`
  width: 90%;
`;
