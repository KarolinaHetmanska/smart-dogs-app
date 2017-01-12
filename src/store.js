import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunkMiddleware from 'redux-thunk'

import { reducer as favoritesEventsReducer } from './SingleEventView'

import allEventsReducer from './state/events/reducer'

const reducer = combineReducers({
  allEventsData: allEventsReducer,
  favoritesData:favoritesEventsReducer

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware
  ),
  persistState(['favoritesData'])
)

const store = createStore(reducer, enhancer);


export default store

