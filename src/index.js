import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {PlacesView} from './PlacesView'
import {PlaceView} from './PlaceView'
import {App} from './App';
import {NotFoundView} from './NotFoundView';
import {EventsView} from './EventsView';
import {EventsListView} from './EventsListView';
import {EventView} from './EventView';
import {SearchEngine} from './SearchEngine';
import './index.css';


import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchEngine}/>

      <Route path="/places" component={PlacesView}>
        <Route path="/places/:placeId" component={PlaceView}/>
      </Route>

      <Route path="/events" component={EventsView}></Route>
      <Route path="/events/:eventId" component={EventView}/>

      <Route path="/eventslist" component={EventsListView} />


      <Route path="*" component={NotFoundView}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
