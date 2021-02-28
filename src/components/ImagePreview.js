import React, {useRef, useEffect} from 'react'
import './css/ImagePreview.css'

const ImagePreview = ({onActive, background})  => {

    const makeStyles = {
        backgroundImage: `url("${background}")`
    }

    const imageRef = useRef()

    const activeBackground = (ref) => {
        ref === true ?
        imageRef.current.classList.add('active')
        : imageRef.current.classList.remove('active')
    }

    useEffect(() => {
        activeBackground(onActive)
    })

    return (

        <div ref={imageRef} style={makeStyles} className="preview--hidden">

        </div>
    )
}

ImagePreview.defaultProps = {
    background: 'url("https://wolt-menu-images-cdn.wolt.com/menu-images/5f15789fd98ff8b3f654548e/4b54f230-ca95-11ea-88bc-6643bdb0a777____11_.jpeg")' 
}



export default ImagePreview
