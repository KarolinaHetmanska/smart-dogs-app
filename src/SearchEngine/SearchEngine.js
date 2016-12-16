import React from 'react'
import {Link} from 'react-router'
import {events} from '../data'
import {FormGroup, FormControl, Col, Button} from 'react-bootstrap'
import {EventsView} from '../EventsView'


export default class SearchEngine extends React.Component {
  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
      if (this.state.search === '') {
        return
      }
      this.setState({
        found: events.filter(
          event => (
            event.name.includes(this.state.search) ||
            event.category.includes(this.state.search) ||
            event.description.includes(this.state.search)
          )
        )
      })
    }

    this.state = {
      search: '',
      found: []
    }
  }

  render() {
    return (

      <div>
        <Col xs={6} xsOffset={3}>
          <h1>SearchEngine</h1>
          <form onSubmit={this.handleSubmit}>
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
            {/*{*/}
              {/*this.state.found.map(*/}
                {/*event =>*/}
                  {/*<li key={event.id}>*/}
                    {/*{event.name} {event.description}*/}
                  {/*</li>*/}
              {/*)*/}
            {/*}*/}

            <EventsView events={this.state.found} />
          </ul>

        </Col>
      </div>


    )
  }
}