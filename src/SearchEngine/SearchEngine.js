import React from 'react'
import {Link} from 'react-router'
import {events} from '../data'
import {FormGroup, FormControl, Col, Button} from 'react-bootstrap'


export default class SearchEngine extends React.Component {
  constructor() {
    super()

    this.state = {
      search: ''
    }
  }

  render() {
    return (

      <div>
        <Col xs={6} xsOffset={3}>
          <h1>SearchEngine</h1>
          <form>
            <FormGroup
              controlId="formBasicText">
              <FormControl
                type="text"
                placeholder="Co chcesz zrobić?"
                value={this.state.search}
                onChange={
                  event => this.setState({
                    search: event.target.value
                })
                }
              />
            </FormGroup>
            <Button type="submit">Search</Button>
          </form>
          <h4>{this.state.search}</h4>
          <ul>
            {
              events.filter(
                event => event.name === this.state.search
              ).map(
                event =>
                  <li key={event.id}>
                    {event.name} {event.description}
                  </li>
              )
            }
          </ul>

        </Col>
      </div>


    )
  }
}