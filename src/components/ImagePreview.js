import React, {useRef, useEffect} from 'react'
import './css/ImagePreview.css'

const ImagePreview = ({onActive})  => {

    const imageRef = useRef()

    const activeBackground = (ref) => {
        console.log(imageRef.current)
        ref === true ?
        imageRef.current.classList.add('active')
        : imageRef.current.classList.remove('active')
    }

    useEffect(() => {
        activeBackground(onActive)
    })

    return (

        <div ref={imageRef} className="preview--hidden">

        </div>
    )
}



export default ImagePreview
