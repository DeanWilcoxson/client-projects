import React from 'react'
import Gallery from '../../global/gallery'

function ResidentialGallery() {
    const gallery = [{ desc: 'hi' }]
    return (
        <div>
            resi gallery
            <Gallery gallery={gallery} />
        </div>
    );
}

export default ResidentialGallery;