import React from 'react'
import {connect} from 'react-redux'
import {Col, DropdownButton, MenuItem, Row, Grid} from 'react-bootstrap'
import {EventsListView} from '../EventsListView'
import {MultiMapView} from '../MapView'
import {Link} from 'react-router'
import './SearchEngine.css'

const mapStateToProps = state => ({
  allEvents: state.allEventsData.allEvents
})


class SearchEngine extends React.Component {

  constructor() {
    super()

    this.handleSubmit = (event) => {
      const search = this.state.search.toLowerCase()
      event.preventDefault()
      if (this.state.search === '') {
        return
      }

      const foundEvents = this.props.allEvents.filter(
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
    // this.handleDropdownCategory = (eventKey) => {
    //   this.setState({
    //     errorMessage: false,
    //     search: ''
    //   })
    //   if (eventKey === 'wszystko') {
    //     this.setState({
    //       found: this.props.allEvents,
    //       chosenCategory: eventKey
    //     })
    //   } else {
    //     this.setState({
    //       found: this.props.allEvents.filter(
    //         event => event.category === eventKey
    //       ),
    //       chosenCategory: eventKey
    //     })
    //   }
    // }

    // this.handleDropdownPlace = (eventKey) => {
    //   this.setState({
    //     errorMessage: false,
    //     search: ''
    //   })
    //   if (eventKey === 'Cale') {
    //     this.setState({
    //       found: this.props.allEvents,
    //       chosenPlace: eventKey,
    //       errorMessage: false
    //     })
    //   } else {
    //     console.log(eventKey);
    //     this.setState({
    //       found: this.props.allEvents.filter(
    //         event => event.city === eventKey
    //       ),
    //       chosenPlace: eventKey
    //     })
    //   }
    // }

    // this.handleDropdownTime = (eventKey, event) => {
    //   let chosenTimeFrame = (new Date().getTime() + eventKey)
    //   this.setState({
    //     found: this.props.allEvents.filter(
    //       event => new Date(event.date).getTime() < chosenTimeFrame
    //     ),
    //     chosenTime: event.target.textContent,
    //     errorMessage: false
    //   })
    //   console.log(chosenTimeFrame)
    //   console.log(typeof chosenTimeFrame)
    // }
    // -------------------------------------

    this.handleDropdownAll = (eventKeyValue) => {
      //console.log(data)
      //let eventKeyValue = 'asdfas'
      const [prefix, value] = eventKeyValue.split('.')
      let { eventKeyCategory, eventKeyPlace, eventKeyTime } = this.state

      switch (prefix) {
        case 'Category':
          eventKeyCategory = value;
          break;
        case 'Place':
          eventKeyPlace = value;
          break;
        case 'Time':
          eventKeyTime = parseInt(value);
          break;
      }

      let chosenTimeFrame = (new Date().getTime() + eventKeyTime)
      this.setState({
        errorMessage: false,
        search: ''
      })
      if (eventKeyCategory === 'wszystko' && eventKeyPlace === 'Cale') {
        this.setState({
          found: this.props.allEvents.filter(
            event => new Date(event.date).getTime() < chosenTimeFrame)
        })
      } else if (eventKeyCategory === 'wszystko') {
        this.setState({
          found: this.props.allEvents.filter(event => event.city === eventKeyPlace
          ).filter(
            event => new Date(event.date).getTime() < chosenTimeFrame)
        })
      } else if (eventKeyPlace === 'Cale') {
        this.setState({
          found: this.props.allEvents.filter(event => event.category === eventKeyCategory
          ).filter(
            event => new Date(event.date).getTime() < chosenTimeFrame)
        })
      } else {
        this.setState({
          found: this.props.allEvents.filter(event => event.category === eventKeyCategory
          ).filter(
            event => event.city === eventKeyPlace
          ).filter(
            event => new Date(event.date).getTime() < chosenTimeFrame)
        })
      }

      this.setState({
        eventKeyCategory: eventKeyCategory, eventKeyPlace, eventKeyTime
      })
    }

    //   -------------------------------------

    this.state = {
      search: '',
      found: [],
      chosenCategory: '',
      chosenPlace: '',
      chosenTime: '',
      phrase: "Co Ciebie interesuje?",
      eventKeyCategory: 'wszystkie',
      eventKeyPlace: 'Cale',
      eventKeyTime: 9997776000000
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
                <h3 className="caption-submain">Wszystkie wydarzenia kulturalne w jednym miejscu</h3>
                <br/>
              </Col>
              <Row>
                <Col xs={8} xsOffset={2}>
                  <div className="search-form-wrapper">
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
                    <button type="submit" className="search-button"><span className="glyphicon glyphicon-search" />
                    </button>
                  </div>
                </Col>
              </Row>

            </form>
          </Col>
          <Row>
            <Col>
              <DropdownButton id="select-category" bsStyle={'default'}
                              title={ 'Kategorie'}
                              onSelect={this.handleDropdownAll}>
                <MenuItem eventKey="Category.koncert">koncert</MenuItem>
                <MenuItem eventKey="Category.musical">musical</MenuItem>
                <MenuItem eventKey="Category.spektakl">spektakl</MenuItem>
                <MenuItem eventKey="Category.wszystko">wszystko</MenuItem>
              </DropdownButton>

              <DropdownButton id="select-city" bsStyle={'default'}
                              title={'Gdzie'}
                              onSelect={this.handleDropdownAll}>
                <MenuItem eventKey="Place.Gdańsk">Gdańsk</MenuItem>
                <MenuItem eventKey="Place.Sopot">Sopot</MenuItem>
                <MenuItem eventKey="Place.Gdynia">Gdynia</MenuItem>
                <MenuItem eventKey="Place.Cale">Całe Trójmiasto</MenuItem>
              </DropdownButton>

              <DropdownButton id="select-date" bsStyle={'default'}
                              title={ 'Kiedy'}
                              onSelect={this.handleDropdownAll}>
                <MenuItem eventKey={'Time.604800000'} >Najbliższy tydzień</MenuItem>
                <MenuItem eventKey={'Time.2592000000'}>Najbliższy miesiąc</MenuItem>
                <MenuItem eventKey={'Time.7776000000'}>Najbliższy kwartał</MenuItem>
                <MenuItem eventKey={'Time.9997776000000'}>Wszystkie</MenuItem>
              </DropdownButton>

            </Col>
          </Row>
        </Row>

        <Grid>
          <Row>
            <Col className="shift-more-left">
              <h3
                className="error-message">{this.state.found.length !== 0 ? 'Najbliższe wydarzenia dla "' + (this.state.search || this.state.chosenCategory || this.state.chosenPlace || this.chosenTime) + '"' : this.state.errorMessage}</h3>
              <br />
              <br />

              <ul>
                <EventsListView events={this.state.found.length !== 0 ? this.state.found : this.props.allEvents.sort(
                  (a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
                ).slice(0, 8)}/>

              </ul>
            </Col>
          </Row>
          <Row>
            <div className="see-more-link-container">
              <Link className="see-more-link" to="/events">
                <h3 className="see-more-link-caption">Zobacz więcej wydarzeń <span className="glyphicon glyphicon-menu-right" /></h3>
              </Link>
            </div>
            <br/>
          </Row>
          <Row>
            <Col className="shift-left">
              <MultiMapView
                searchedEvents={this.state.found.length !== 0 ? this.state.found : this.props.allEvents.sort(
                  (a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
                ).slice(0, 8)}/>
            </Col>
          </Row>
        </Grid>
      </Grid>

    )
  }

}
export default connect(mapStateToProps)(SearchEngine)