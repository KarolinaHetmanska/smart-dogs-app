import React from 'react'
import {events} from '../../data'
import {Col, DropdownButton, MenuItem, Row} from 'react-bootstrap'


export default class SearchEngineDropdowns extends React.Component {
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
  }

  render() {
    return (
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
    )
  }
}