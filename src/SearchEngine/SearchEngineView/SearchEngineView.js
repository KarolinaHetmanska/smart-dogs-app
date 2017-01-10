import React from 'react'
import {events} from '../../data'
import { Col, DropdownButton, MenuItem, Row} from 'react-bootstrap'
import {EventsListView} from '../../EventsListView'
import {MultiMapView} from '../../MapView'
import {SearchEngineForm} from '../SearchEngineForm';
import {SearchEngineDropdowns} from '../SearchEngineDropdowns';
import './SearchEngineView.css'


export default class SearchEngineView extends React.Component {
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
  }

  render() {
    return (

      <div>
        <Row className="searchContainer">
          <SearchEngineForm />
          <SearchEngineDropdowns />
        </Row>
        <Row>
          <Col>
            <h3 className="error-message">{this.state.found.length !== 0 ? 'Najbliższe wydarzenia dla "'+ (this.state.search || this.state.chosenCategory || this.state.chosenPlace || this.chosenTime) +'"' : this.state.errorMessage}</h3>
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

      </div>


    )
  }

}