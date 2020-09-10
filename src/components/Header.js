import React from "react"
import {Link} from "react-router-dom"

export default function Headers(){
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favourites">Favourites</Link></li>
            <li><a href="#contact">About</a></li>
            <li className="right"><Link to="/cart">View Cart</Link></li>
        </ul>
    )
}