import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import { Link } from 'react-router-dom'

function MobileNav() {
    const [toggle, setToggle] = useState(false)

    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <div id="mob-nav-icon">

            {toggle ?
                <div id="mob-nav-links">
                    <GrClose size={'3em'} onClick={handleToggle} />
                    <Link onClick={handleToggle} to="/">Home</Link>
                    <Link onClick={handleToggle} to="/residential">Residential</Link>
                    <Link onClick={handleToggle} to="/automotive">Automotive</Link>
                    <Link onClick={handleToggle} to="/commercial">Commercial</Link>
                </div> :
                <div>
                    <GiHamburgerMenu size={'3em'} onClick={handleToggle} />
                </div>}
        </div>
    );
}

export default MobileNav;