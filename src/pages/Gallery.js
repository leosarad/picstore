import React, {useContext} from "react"
import {PhotosContext} from "../PhotosContext"

import Image from "../components/Image"
function Gallery(){
    let {photos} = useContext(PhotosContext)
    let PhotoGallery = photos.map( item => <Image details={item} key={item.id} />)
    return (
        <div className="gallery">
            {PhotoGallery}
        </div>
    )
}

export default Gallery