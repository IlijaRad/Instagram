import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import FirebaseContext from './context/firebase';
import {firebase, FieldValue} from './lib/firebase';
import './styles/app.css';


ReactDOM.render(
  <FirebaseContext.Provider value={{firebase, FieldValue}}>
      <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);