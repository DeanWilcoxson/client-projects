import React from 'react'
import houseTint from '../../../images/HouseTint.jpg'
import Sidebar from '../../global/sidebar'
import ContactFormResidential from './ContactFormResidential'

const Residential = () => {
    const links = [{
        endpoint: '/commercial',
        name: 'Commercial'
    },
    {
        endpoint: '/residential',
        name: "Residential"
    },
    {
        endpoint: '/contact',
        name: 'Contact'
    }]

    return (
        <div>

            {/* Sidebar needs to be added to grid on left side to encompass the entire left portion of page. */}
            <Sidebar links = {links}/>

            <h1>Residential</h1>

            <img src={houseTint} style={{height: '700px', width: '950px'}}/>

            <h3>Oakdale Window Tint</h3>

            <ContactFormResidential />
        </div>
    )
}

export default Residential