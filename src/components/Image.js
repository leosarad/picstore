import React, {useContext} from "react"
import {PhotosContext} from "../PhotosContext"

function Image(props){
     
     let photo = props.details
     let {toggleFavourite} = useContext(PhotosContext)

     const getClass = ()=>{
          if(photo.id%3===0)
               return "wide"
          else if(photo.id%4===0)
               return "tall"
          else 
               return ""
     }

     const heart = (photo.isFavourite)? <i className="heart ri-heart-3-fill" onClick={()=>toggleFavourite(photo.id)}></i> : <i className="heart ri-heart-3-line" onClick={()=>toggleFavourite(photo.id)}></i>

     return (
          <div className={`gallery-item ${getClass()}`} >
               <a href="#"><img src={photo.url} className="gallery-img" alt="gallery-img"></img></a>
               <div className="overlay">
                    {heart}
               </div>
          </div>
     )
}

export default Image