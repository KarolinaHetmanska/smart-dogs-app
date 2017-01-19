import {FETCH_COMMENTS__BEGIN} from './actionTypes'
import {FETCH_COMMENTS__END} from './actionTypes'

const initialState = {
  comments: []
}


export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_COMMENTS__END:
      return {
        ...state,
        comments: action.comments
      }
    default:
      return state
  }
}