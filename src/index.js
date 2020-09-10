import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import {PhotosContextProvider} from "./PhotosContext"

const AppWrapper = 
                <Router>
                  <React.StrictMode>
                    <PhotosContextProvider>
                      <App />
                    </PhotosContextProvider>
                  </React.StrictMode>
                </Router>

ReactDOM.render(AppWrapper ,
  document.getElementById('root')
);
