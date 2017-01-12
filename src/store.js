import { createStore, combineReducers } from 'redux'

import { reducer as favoritesEventsReducer } from './SingleEventView'
import { reducer as eventsReducer } from './EventsListView'

const reducer = combineReducers({
  eventsData: eventsReducer,
  favoritesData:favoritesEventsReducer

})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store

