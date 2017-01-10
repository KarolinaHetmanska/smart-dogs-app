import React from 'react'
import {events} from '../../data'
import {FormGroup, FormControl, Col, Button} from 'react-bootstrap'


export default class SearchEngineForm extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      found: [],
      chosenCategory: '',
      chosenPlace: '',
      chosenTime: '',
      phrase: "Co Ciebie interesuje?"
    }

    this.handleSubmit = (event) => {
      const search = this.state.search.toLowerCase()
      event.preventDefault()
      if (this.state.search === '') {
        return
      }

      const foundEvents = events.filter(
        event => (
          event.name.toLowerCase().includes(search) ||
          event.category.toLowerCase().includes(search) ||
          event.description.toLowerCase().includes(search)
        )
      )
      if (foundEvents.length > 0) {
        this.setState({
          found: foundEvents,
          errorMessage: false
        })
      } else {
        this.setState({
          errorMessage: "Nie znaleziono wyników dla '" + search + "' ale sprawdź wydarzenia, które rekomendujemy:",
          found: []
        })
      }
    }
  }

  render() {
    return (

      <Col xs={8} xsOffset={2}>
        <form onSubmit={this.handleSubmit}>
          <Col xs={6} xsOffset={3}>
            <h1>Idziemy w miasto!</h1>
            <br />
          </Col>
          <Col xs={10}>

            <FormGroup
              controlId="formBasicText">
              <FormControl
                type="text"
                placeholder={this.state.phrase}
                value={this.state.search}
                onChange={
                  event => this.setState({
                    search: event.target.value
                  })
                }
              />
            </FormGroup>

          </Col>
          <Col xs={2}>
            <Button type="submit">Szukaj</Button>
          </Col>
        </form>
      </Col>
    )
  }
}