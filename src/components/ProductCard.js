import React, { useState, useRef} from 'react'
import ImagePreview from './ImagePreview'
import './css/ProductCard.css'
import item from  '../img/edamame.jpeg'

const ProductCard =() => {

    const makeStyle  = {
            backgroundImage: `url(${item})`
    }

    const imageRef = useRef()

    const [hidden, setHidden] = useState(false)

    const focusObject = () => {
        hidden === false ? setHidden(true) : setHidden(false)

        imageRef.current.classList.toggle('hidden')
    }

    return (

        <div onClick={() => focusObject()} className="product-item">

            <ImagePreview onActive={hidden} />

            <div className="product-content">
                <div className="product-info">
                    <h3>A title</h3>
                    <p>This is a description</p>
                    <p className="price_tag">5.00€</p>
                </div>
                <div ref={imageRef} className="product-image-container">
                    <div className="product-img-placeholder" style={makeStyle}></div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
