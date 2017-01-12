import { createStore, combineReducers } from 'redux'

//import { reducer as favoriteEventsReducer } from './SingleEventView'
import { reducer as eventsReducer } from './EventsListView'

const reducer = combineReducers({
  eventsData: eventsReducer,

})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store

//favoriteEventsData: favoriteEventsReducer