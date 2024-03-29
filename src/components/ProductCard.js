import React, { useState, useRef } from 'react'
import ImagePreview from './ImagePreview'
import './css/ProductCard.css'

const ProductCard =({src, desc, title, price}) => {

    let makeStyle  = {
            backgroundImage: `url(${src})`
    }

    const imageRef = useRef([])

    const [hidden, setHidden] = useState(false)

    const showImageBig = () => { 
        hidden === false ? setHidden(true) : setHidden(false)

        imageRef.current.map(e => {
           return e.classList.toggle('hidden')
        })

    }

    return (

        <div onClick={() => showImageBig()} className="product-item">

            <ImagePreview background={src} onActive={hidden} />

            <div className="product-content">
                <div className="product-info">

                    <h3>{title}</h3>

                    <p>{desc}</p>

                    <p className="price_tag">{price}</p>
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
    src : 'https://previews.123rf.com/images/balinature/balinature1709/balinature170900090/87106838-frame-with-set-of-traditional-japanese-food-on-a-dark-background-sushi-rolls-nigiri-raw-salmon-steak.jpg', 
    title : 'Comming soon ...', 
    desc : 'Not available at the moment',
    price : null
}

export default ProductCard
