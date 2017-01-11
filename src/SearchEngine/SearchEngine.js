import React from 'react'
import {events} from '../data'
import {FormGroup, FormControl, Col, Button, DropdownButton, MenuItem, Row, Grid} from 'react-bootstrap'
import {EventsListView} from '../EventsListView'
import {MultiMapView} from '../MapView'
import './SearchEngine.css'


export default class SearchEngine extends React.Component {
  constructor() {
    super()

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
    this.handleDropdownCategory = (eventKey) => {
      this.setState({
        errorMessage: false,
        search: ''
      })
      if (eventKey === 'wszystko') {
        this.setState({
          found: events,
          chosenCategory: eventKey
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
      this.setState({
        errorMessage: false,
        search: ''
      })
      if (eventKey === 'Cale') {
        this.setState({
          found: events,
          chosenPlace: eventKey,
          errorMessage: false
        })
      } else {
        console.log(eventKey);
        this.setState({
          found: events.filter(
            event => event.city === eventKey
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
        chosenTime: event.target.textContent,
        errorMessage: false
      })
      console.log(chosenTimeFrame)
      console.log(typeof chosenTimeFrame)
    }

    this.state = {
      search: '',
      found: [],
      chosenCategory: '',
      chosenPlace: '',
      chosenTime: '',
      phrase: "Co Ciebie interesuje?"

    }
  }

  render() {
    return (
      <Grid className="background-image-container" fluid>
        <Row className="search-container search-background">
          <Col>
            <form onSubmit={this.handleSubmit}>
              <Col>
                <h1 className="caption-main">Miasto żyje!</h1>
              </Col>
              <Col>
                <h3 className="caption-submain">Wszystkie eventy i wydarzenia kulturalne w jednym miejscu</h3>
                <br/>
              </Col>
              <Row>
                <Col xs={8} xsOffset={2}>
                  <div className="searchForm-wrapper">
                    <input className="search-form"
                           type="text"
                           placeholder={this.state.phrase}
                           value={this.state.search}
                           onChange={
                             event => this.setState({
                               search: event.target.value
                             })
                           }
                    />
                    <button type="submit" className="search-button">Szukaj</button>
                  </div>
                </Col>
              </Row>

            </form>
          </Col>
          <Row>
            <Col>
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
        </Row>

        <Grid>
          <Row>
            <Col>
              <h3
                className="error-message">{this.state.found.length !== 0 ? 'Najbliższe wydarzenia dla "' + (this.state.search || this.state.chosenCategory || this.state.chosenPlace || this.chosenTime) + '"' : this.state.errorMessage}</h3>
              <br />
              <br />

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
        </Grid>
      </Grid>

    )
  }

}