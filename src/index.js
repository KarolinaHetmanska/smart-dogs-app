import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {PlacesView} from '/PlacesView'
import {PlaceView} from '/PlaceView'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './index.css';


import { App } from './App';
import { NotFoundView } from './NotFoundView';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'


ReactDOM.render(
  <App />,


  <Route path="/places" component="{PlacesView}">
    <Route path="/places/:placeId" component="{PlaceView}"/>
  </Route>,

  <Router history={browserHistory}>
    <Route path="/" component={App}>

    </Route>
    <Route path="*" component={NotFoundView} />
  </Router>,
  document.getElementById('root')
)
