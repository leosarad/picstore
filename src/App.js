import React from 'react';

import Header from "./components/Header"
import Gallery from "./pages/Gallery"
import "./app.css"

function App() {
  return (
    <React.Fragment>
        <Header />
        <Gallery />
    </React.Fragment>
  )
}

export default App;
