import React from 'react'
import {connect} from 'react-redux'
import {fetchComments} from '../state/comments/actionCreators'

const mapStateToProps = (state) => ({
  comments: state.commentsData.comments
})

const mapDispatchToProps = (dispatch) => ({
  fetchDataComments: () => dispatch(fetchComments())
})

class CommentsView extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    fetchDataComments()
  }

  render() {
    return (
      <div>
        <h1>Komentarze</h1>
        <h3>Wyświetlam komentarze</h3>
        <div>
          {
            this.props.comments.map(comment =>

              <table>
                <tr>
                  <td>{comment.title}</td>
                  <td>{comment.content}</td>
                  <td>{comment.authorName}</td>
                </tr>
              </table>)
          }
        </div>

        <h3>Wprowadzam komentarze</h3>
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
export default connect(mapStateToProps, mapDispatchToProps)(CommentsView)
