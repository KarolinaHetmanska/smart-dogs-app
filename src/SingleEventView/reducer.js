const initialState = {
  favoritesEvents: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EVENT_TO_FAVORITES':
      return {
        ...state,
        favoritesEvents: state.favoritesEvents.indexOf(action.eventId) !== -1 ? state.favoritesEvents : state.favoritesEvents.concat(action.eventId)
      }
    default:
      return state
  }
}