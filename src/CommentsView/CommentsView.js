import React from 'react'
import {connect} from 'react-redux'
import {fetchComments} from '../state/comments/actionCreators'

const mapStateToProps = (state) => ({
  comments: state.commentsData.comments,
  places: state.placesData.places
})

const mapDispatchToProps = (dispatch) => ({
  fetchDataComments: () => dispatch(fetchComments()),
  submitComment: (comment) => dispatch({ type: 'nothing'})
})


class CommentsView extends React.Component {
  constructor() {
    super()

    this.state= {
      title: '',
      content: '',
      authorName: ''
    }

    this.handleSubmit = () => {
      this.props.submitComment({
        ...this.state,
        itemId: this.props.params.placeId
      })
    }
  }


  componentWillMount() {
    // console.log("willmount:", this.props)
    this.props.fetchDataComments()
  }

  render() {
    return (
      <div>
        <h1>Komentarze</h1>
        <h3>Wyświetlam komentarze</h3>
        <div>
          {
            //this.props.comments.filter(comment =>
              //comment.itemId == this.props.places(this.props.params.placeId))
            console.log('this props places: ', this.props.places)}

          {this.props.comments.filter(comment =>
            comment.itemId == this.props.places[this.props.params.placeId].id
          ).map(comment =>
            <table>
                <tr key={comment.id}>
                  <td>{comment.title}</td>
                  <td>{comment.content}</td>
                  <td>{comment.authorName}</td>
                </tr>
              </table>)
          }
        </div>
        <h3>Wprowadzam komentarze</h3>
        <p> Tytuł </p>
        <input type="text"
               value={this.state.title}
               onChange={(event) => this.setState({title: event.target.value})}
        />
        {console.log("title: ", this.state.title)}
        <p>Komentarz</p>
        <textarea cols="30" rows="10"
                  value={this.state.content}
                  onChange={(event) => this.setState({content: event.target.value})}>
</textarea>
        <p>Podpis</p>
        <input type="text"
               value={this.state.authorName}
               onChange={(event) => this.setState({authorName: event.target.value})}/>/>
        <br/>
        <button type="submit">Submit</button>

      </div>
    )

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentsView)
