import React, { useState, useRef } from 'react'
import ImagePreview from './ImagePreview'
import './css/ProductCard.css'
import item from  '../img/edamame.jpeg'

const ProductCard =({src, desc, title}) => {

    let makeStyle  = {
            backgroundImage: `url(${src})`
    }

    const imageRef = useRef([])

    const [hidden, setHidden] = useState(false)

    const focusObject = () => { 
        hidden === false ? setHidden(true) : setHidden(false)

        imageRef.current.map(e => {
           return e.classList.toggle('hidden')
        })

    }

    return (

        <div onClick={() => focusObject()} className="product-item">

            <ImagePreview background={src} onActive={hidden} />

            <div className="product-content">
                <div className="product-info">

                    <h3>{title}</h3>

                    <p>{desc}</p>

                    <p className="price_tag">5.00€</p>
                </div>
                <div ref={ref => imageRef.current[0] = ref} className="product-image-container">
                    <div className="product-img-placeholder" style={makeStyle}></div>
                </div>
            </div>
            <div ref={ref => imageRef.current[1] = ref} className="product-buttons-container hidden">

            </div>
        </div>
    )
}

ProductCard.defaultProps = {
    src : item, 
    title : 'Some delicious food', 
    desc : 'Not available'
}

export default ProductCard
