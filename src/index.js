import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import {PlacesView} from './PlacesView'
import {PlaceView} from './PlaceView'
import {App} from './App';
import {NotFoundView} from './NotFoundView';
import {EventsView} from './EventsView';
import {EventsListView} from './EventsListView';
import {SingleEventView} from './SingleEventView';
import {SearchEngine} from './SearchEngine';
import {FavoritesEventsView} from './FavoritesEventsView';

import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import { fetchEvents } from './state/events/actionCreators'

const fetchEventsOnEnter = () => store.dispatch(fetchEvents())

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={fetchEventsOnEnter}>
        <IndexRoute component={SearchEngine} />

        <Route path="/places" component={PlacesView}>
          <Route path="/places/:placeId" component={PlaceView}/>
        </Route>

        <Route onEnter={() => window.scrollTo(0, 0)} path="/events" component={EventsView}  />
        <Route path="/events/:eventId" component={SingleEventView} />

        <Route path="/eventslist" component={EventsListView} />

        <Route path="/favorites" component={FavoritesEventsView} />

        <Route path="*" component={NotFoundView}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)