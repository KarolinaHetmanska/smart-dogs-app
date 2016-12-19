import React from 'react'
import {events, places} from '../data'
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
    this.handleDropdownCategory = (eventKey) => {
      this.setState({
        found: events.filter(
          event => event.category === eventKey
        )
      })
    }
    this.handleDropdownPlace = (eventKey) => {
      if (this.eventKey === 'undefined') {
        return
      }
      console.log(eventKey);
      this.setState({
        found: places.filter(
          place => place.city === eventKey
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
          <DropdownButton bsStyle={'Default'} title={'Kategorie'} onSelect={this.handleDropdownCategory}>
            <MenuItem eventKey="koncert">koncert</MenuItem>
            <MenuItem eventKey="musical">musical</MenuItem>
            <MenuItem eventKey="spektakl">spektakl</MenuItem>
            <MenuItem eventKey="#">wszystko</MenuItem>

          </DropdownButton>
          <DropdownButton bsStyle={'Default'} title={'Gdzie'} onSelect={this.handleDropdownPlace}>

            <MenuItem eventKey="Gdańsk">Gdańsk</MenuItem>
            <MenuItem eventKey="Sopot">Sopot</MenuItem>
            <MenuItem eventKey="Gdynia">Gdynia</MenuItem>
          </DropdownButton>
          <ul>
            <EventsListView events={this.state.found}/>
          </ul>

        </Col>
      </div>


    )
  }
}