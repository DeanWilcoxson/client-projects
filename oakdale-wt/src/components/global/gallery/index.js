import React from 'react'

function Gallery(props) {
    const { gallery } = props

    return (
        <div>
            {gallery.map(x => {
                if (x.desc) {
                    return (
                        <div>
                            <img src={x.source} />
                            <p>{x.desc}</p>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <img src={x.source} />
                        </div>
                    )
                }
            })}
        </div>

    );
}

export default Gallery;