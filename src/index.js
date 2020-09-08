import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {PhotosContextProvider} from "./PhotosContext"

ReactDOM.render(
  <React.StrictMode>
    <PhotosContextProvider>
      <App />
    </PhotosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
