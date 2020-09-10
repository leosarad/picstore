import React, {useContext} from "react"
import {PhotosContext} from "../PhotosContext"

import Image from "../components/Image"
function Favourites(){
    let {favourites} = useContext(PhotosContext)
    let FavouriteGallery = favourites.map( item => <Image details={item} key={item.id} />)
    console.log(favourites)
    return (
        <div className="gallery">
            {FavouriteGallery}
        </div>
    )
}

export default Favourites