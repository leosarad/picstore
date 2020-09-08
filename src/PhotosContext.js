import React, {useState, useEffect} from "react"
const PhotosContext = React.createContext() 

function PhotosContextProvider(props){
    let [photos, setPhotos] = useState([])

    useEffect(()=>{
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        fetch(url)
        .then(res => res.json())
        .then(res =>{
            setPhotos(res)
        })
    },[])

    return (
        <PhotosContext.Provider value={photos}>
            {props.children}
        </PhotosContext.Provider>
    )
}

export {PhotosContext, PhotosContextProvider}