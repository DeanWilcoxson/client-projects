import styled from "styled-components";
import "./../../../notes/50 Blizzards.ttf";
export const ErrorContainer = styled.div`
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ErrorBox = styled.div`
  text-align: center;
  background-color: #25252525;
`;
export const ErrorText = styled.h4`
  font-size: 2rem;
  font-weight: bold;
  font-family: "50 Blizzards";
  color: red;
  text-shadow: white 0.5px 1px 1px;
`;
