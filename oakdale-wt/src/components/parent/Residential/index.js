import React from 'react'
import houseTint from '../../../images/HouseTint.jpg'
import Sidebar from '../../global/sidebar'
import ContactFormResidential from './ContactFormResidential'
import ResidentialGallery from './ResidentialGallery'

const Residential = () => {
    const links = [
        {
            endpoint: '/contact',
            name: 'Contact'
        },
        {
            endpoint: '/residential/gallery',
            name: 'Gallery'
        }]

    return (
        <div>
            <h1>Residential</h1>
        </div>
    )
}

export default Residential