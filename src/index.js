import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {PlacesView} from '/PlacesView'
import {PlaceView} from '/PlaceView'
import './index.css';


ReactDOM.render(
  <App />,


  <Route path="/places" component="{PlacesView}">
    <Route path="/places/:placeId" component="{PlaceView}"/>
  </Route>,

  document.getElementById('root')
)
