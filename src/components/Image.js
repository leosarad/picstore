import React from "react"

function Image(props){
let photo = props.details
     return (
          <div className="gallery-photo" key={photo.id}>
               <a href="#"><img src={photo.url} className="gallery-img" alt="gallery-img"></img></a>
               <div>backdrop</div>
          </div>
     )
}

export default Image