import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import {PlaceView} from './PlaceView'
import {App} from './App';
import {NotFoundView} from './NotFoundView';
import {EventsView} from './EventsView';
import {EventsListView} from './EventsListView';
import {SingleEventView} from './SingleEventView';
import {SearchEngine} from './SearchEngine';

import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchEngine}/>

        <Route path="/place" component={PlaceView}>
        </Route>

        <Route path="/events" component={EventsView} />
        <Route path="/events/:eventId" component={SingleEventView}/>

        <Route path="/eventslist" component={EventsListView} />


        <Route path="*" component={NotFoundView}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)