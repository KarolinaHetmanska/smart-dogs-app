import {
  FETCH_COMMENTS__END, FETCH_COMMENTS__BEGIN,
  SUBMIT_COMMENTS__BEGIN, SUBMIT_COMMENTS__END
} from './actionTypes'

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
    // console.log('get w AC: ', commentsArray);
    return dispatch({type: FETCH_COMMENTS__END, comments: commentsArray})
  });
}

export const submitComment = () => dispatch => {
  // dispatch({type: SUBMIT_COMMENTS__BEGIN})
  fetch('http://localhost:3001/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: "tytuł na sztywno",
      content: "tytuł na sztywno",
      authorName: "tytuł na sztywno",
      itemId: 1
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('submitComment - POST:', data);
   dispatch({type: SUBMIT_COMMENTS__END, comments: data})
  });
}


