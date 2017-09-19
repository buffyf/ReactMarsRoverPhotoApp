import React from 'react'

const imageDisplay = ({ images }) => {

    let imagesArray = images.map((image, index) => {
        return (
            <div key={index}>
                <img src={image["img_src"]} />
            </div>
        )
    })

    return (
        <div>
            {imagesArray}
        </div>
    )
}

export default imageDisplay; 
