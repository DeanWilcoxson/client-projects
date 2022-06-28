import React, { useState } from "react";
import {
  MobileIconContainer,
  MobileLinksContainer,
  MobileLink,
  MobileIconCloseToggle,
  MobileIconHamburgerToggle,
  MobileIconHamburgerToggleContainer,
} from "./MobileNavElements";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <MobileIconContainer>
      {toggle ? (
        <MobileLinksContainer>
          <MobileLink onClick={handleToggle} to="/">
            Home
          </MobileLink>
          <MobileLink onClick={handleToggle} to="/residential">
            Residential
          </MobileLink>
          <MobileLink onClick={handleToggle} to="/automotive">
            Automotive
          </MobileLink>
          <MobileLink onClick={handleToggle} to="/commercial">
            Commercial
          </MobileLink>
          <MobileIconCloseToggle onClick={handleToggle} />
        </MobileLinksContainer>
      ) : (
        <MobileIconHamburgerToggleContainer>
          <MobileIconHamburgerToggle onClick={handleToggle} />
        </MobileIconHamburgerToggleContainer>
      )}
    </MobileIconContainer>
  );
};

export default MobileNav;
