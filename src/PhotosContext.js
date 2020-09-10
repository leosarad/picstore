import React, {useState, useEffect} from "react"
const PhotosContext = React.createContext() 

function PhotosContextProvider(props){
    let [photos, setPhotos] = useState([])
    let [favourites, setFavourites] = useState([])
    let [cart, setCart] = useState([])


    useEffect(()=>{
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        // const url = "https://picsum.photos/v2/list"

        fetch(url)
        .then(res => res.json())
        .then(res =>{
            setPhotos(res)
        })
    },[])

    const toggleFavourite = (id)=>{
        let updatedPhotos = photos.map(photo=>{
                if(id===photo.id){
                    let updatedPhoto = {...photo, isFavourite:!photo.isFavourite}
                    return updatedPhoto
                }
            return photo
        })
        setPhotos(updatedPhotos)
        let updatedFavourites = updatedPhotos.filter(photo=>photo.isFavourite)
        setFavourites(updatedFavourites)
        setCart(updatedFavourites)
    }

    return (
        <PhotosContext.Provider value={{photos, favourites, toggleFavourite, cart, setCart}}>
            {props.children}
        </PhotosContext.Provider>
    )
}

export {PhotosContext, PhotosContextProvider}