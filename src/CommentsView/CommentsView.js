import React from 'react'

class CommentsView extends React.Component {
render () {
  return (
    <div>
      <h1>Komentarze</h1>
      <p> Tytuł </p>
      <input type="text"/>
      <p>Komentarz</p>
      <textarea cols="30" rows="10">

</textarea>
      <p>Podpis</p>
      <input type="text"/>
      <br/>
      <button type="submit">Submit</button>
    </div>
  )

}
}
export default CommentsView
