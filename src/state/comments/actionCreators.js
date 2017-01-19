import {FETCH_COMMENTS__END, FETCH_COMMENTS__BEGIN} from './actionTypes'

export const fetchComments = () => dispatch => {
  dispatch({type: FETCH_COMMENTS__BEGIN})
  fetch('http://localhost:3001/api/comments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(function (response) {
    return response.json();
  }).then(function (commentsArray) {
    console.log('get w AC: ', commentsArray);
    return dispatch({type: FETCH_COMMENTS__END, comments: commentsArray})
  });
}

