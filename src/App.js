import React from 'react';
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Gallery from "./pages/Gallery"
import Favourites from "./pages/Favourites"
import Cart from "./pages/Cart"


import "./app.css"

function App() {
  return (
    <React.Fragment>
        <Header />
          <Switch>
            <Route exact path="/"> <Gallery /> </Route>
            <Route exact path="/favourites"> <Favourites /> </Route>
            <Route exact path="/cart"> <Cart /> </Route>

          </Switch>
    </React.Fragment>
  )
}

export default App;
