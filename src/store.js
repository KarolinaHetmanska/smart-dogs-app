import { createStore, combineReducers } from 'redux'

import { reducer as eventsReducer } from './EventsListView'
import { reducer as placeReducer } from './PlaceView'

const reducer = combineReducers({
  eventsData: eventsReducer,
  placeData: placeReducer

})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store

//favoriteEventsData: favoriteEventsReducer