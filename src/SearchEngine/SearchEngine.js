import React from 'react'
import {events} from '../data'
import {FormGroup, FormControl, Col, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import {EventsListView} from '../EventsListView'


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
    this.handleDropdownChange = (eventKey) => {
      // if (this.state.search === '') {
      //   return
      // }
      console.log(eventKey);
      this.setState({
        found: events.filter(
         event => event.category === eventKey
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
            <DropdownButton bsStyle={'Default'} title={'Kategorie'} onSelect={this.handleDropdownChange}>
              <MenuItem eventKey="koncert">koncert</MenuItem>
              <MenuItem eventKey="2">musical</MenuItem>
              <MenuItem eventKey="3">spektakl</MenuItem>
            </DropdownButton>
          </form>
          <ul>
            <EventsListView events={this.state.found} />
          </ul>

        </Col>
      </div>


    )
  }
}