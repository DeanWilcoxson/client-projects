import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar(props) {
    const {links} = props

    return ( 
        <div>
            {links.map(x => {
                return <Link to={x.endpoint}>{x.name}</Link>
            })}
        </div>
     );
}

export default Sidebar;