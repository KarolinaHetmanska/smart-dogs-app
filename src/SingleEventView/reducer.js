const initialState = {
  favoriteEvents: []
}

export default (state = initialState, action) => {
  switch (action.type) {
        case 'ADD_EVENT_TO_FAVORITES':
      return {
        ...state,
        favoriteEvents: state.favoriteEvents.concat(action.eventId)
      }
    default:
      return state
  }
}