import {FETCH_COMMENTS__END} from './actionTypes'

export const fetchComments = () =>{
  fetch('http://localhost:3001/api/comments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'},
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('get w AC: ', data);
  });
}

