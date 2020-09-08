import React from "react"

export default function Headers(){
    return (
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">Favourites</a></li>
            <li><a href="#contact">About</a></li>
            <li className="right"><a className="active" href="#about">View Cart</a></li>
        </ul>
    )
}