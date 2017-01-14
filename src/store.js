import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunkMiddleware from 'redux-thunk'

import { reducer as favoritesEventsReducer } from './FavoritesToggleButton'

import allEventsReducer from './state/events/reducer'
import { reducer as placeReducer } from './PlaceView'

const reducer = combineReducers({
  allEventsData: allEventsReducer,
  placeData: placeReducer,
  favoritesData:favoritesEventsReducer

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware
  ),
  persistState([], { key: 'smartdogs-v1' })
)

const store = createStore(reducer, enhancer);


export default store

