import React from 'react'
import {events, places} from '../data'
import {FormGroup, FormControl, Col, Button, DropdownButton, MenuItem, Row} from 'react-bootstrap'
import {EventsListView} from '../EventsListView'
import {ComingEvents} from '../ComingEvents'
import {MultiMapView} from '../MapView'
import './SearchEngine.css'


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
      if (eventKey === 'wszystko') {
        this.setState({
          found: events
        })
      } else {
        this.setState({
          found: events.filter(
            event => event.category === eventKey
          ),
          chosenCategory: eventKey
        })
      }
    }

    this.handleDropdownPlace = (eventKey) => {
      if (eventKey === 'Cale') {
        this.setState({
          found: places
        })
      } else {
        console.log(eventKey);
        this.setState({
          found: places.filter(
            place => place.city === eventKey
          ),
          chosenPlace: eventKey
        })
      }
    }

    this.handleDropdownTime = (eventKey, event) => {
      let chosenTimeFrame = (new Date().getTime() + eventKey)
      this.setState({
        found: events.filter(
          event => new Date(event.date).getTime() < chosenTimeFrame
        ),
        chosenTime: event.target.textContent
      })
      console.log(chosenTimeFrame)
      console.log(typeof chosenTimeFrame)
    }

    this.state = {
      search: '',
      found: [],
      chosenCategory: '',
      chosenPlace: '',
      chosenTime: ''

    }
  }

  render() {
    return (

      <div>
        <Row className="searchContainer">
          <Col xs={8} xsOffset={2}>
            <Col xs={6} xsOffset={3}>
              <h1>SearchEngine</h1>
            </Col>
            <Col xs={10}>
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
              </form>
            </Col>
            <Col xs={2}>
              <Button type="submit">Search</Button>
            </Col>
          </Col>

          <Col xs={10} xsOffset={2}>
            <DropdownButton id="chooseCategory" bsStyle={'default'}
                            title={this.state.chosenCategory !== '' ? this.state.chosenCategory : 'Kategorie'}
                            onSelect={this.handleDropdownCategory}>
              <MenuItem eventKey="koncert">koncert</MenuItem>
              <MenuItem eventKey="musical">musical</MenuItem>
              <MenuItem eventKey="spektakl">spektakl</MenuItem>
              <MenuItem eventKey="wszystko">wszystko</MenuItem>
            </DropdownButton>

            <DropdownButton id="chooseCity" bsStyle={'default'}
                            title={this.state.chosenPlace !== '' ? this.state.chosenPlace : 'Gdzie'}
                            onSelect={this.handleDropdownPlace}>
              <MenuItem eventKey="Gdańsk">Gdańsk</MenuItem>
              <MenuItem eventKey="Sopot">Sopot</MenuItem>
              <MenuItem eventKey="Gdynia">Gdynia</MenuItem>
              <MenuItem eventKey="Cale">Całe Trójmiasto</MenuItem>
            </DropdownButton>

            <DropdownButton id="chooseDate" bsStyle={'default'}
                            title={this.state.chosenTime !== '' ? this.state.chosenTime : 'Kiedy'}
                            onSelect={this.handleDropdownTime}>
              <MenuItem eventKey={604800000}>Najbliższy tydzień</MenuItem>
              <MenuItem eventKey={2592000000}>Najbliższy miesiąc</MenuItem>
              <MenuItem eventKey={7776000000}>Najbliższy kwartał</MenuItem>
            </DropdownButton>

          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <EventsListView events={this.state.found.length !== 0 ? this.state.found : events.sort(
                (a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
              ).slice(0, 8)}/>

            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <MultiMapView searchedEvents={this.state.found.length !== 0 ? this.state.found : events.sort(
              (a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
            ).slice(0, 8)}/>
          </Col>
        </Row>

      </div>


    )
  }

}