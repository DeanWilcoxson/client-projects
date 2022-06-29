import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
export const MobileIconContainer = styled.div`
  visibility: hidden;
  @media screen and (max-width: 770px) {
    visibility: visible;
  }
  @media screen and (max-width: 400px) {
  }
`;
export const MobileLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const MobileLink = styled(Link)`
  color: #253545b2;
  text-shadow: #25354576 1px 1px 2px;
  text-decoration: none;
  margin: 0.5rem;
`;
export const MobileIconCloseToggle = styled(AiOutlineClose)`
  font-size: 2rem;
  margin-bottom: 5px;
  margin-right: 3rem;
  color: #253545b2;
`;
export const MobileIconHamburgerToggle = styled(GiHamburgerMenu)`
  font-size: 2rem;
  margin-bottom: 5px;
  margin-right: 3rem;
  color: #253545b2;
`;
export const MobileIconHamburgerToggleContainer = styled.div`
  padding: 5px;
  margin-top: 25px;
`;
