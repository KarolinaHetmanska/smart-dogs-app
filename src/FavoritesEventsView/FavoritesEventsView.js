import React from 'react'
import {
  Grid,
  Button,
  Thumbnail,
  Col,
  Row
} from 'react-bootstrap'
import {Link} from 'react-router'

import {MultiMapView} from '../MapView'

import {connect} from 'react-redux'

const mapStateToProps = state => ({
  favoritesEvents: state.favoritesData.favoritesEvents,
  allEvents: state.eventsData.allEvents
})

const FavoritesEventsView = props => {

  const eventsToDisplay = props.allEvents.filter(
    event => props.favoritesEvents.indexOf(event.id) !== -1
  )

  return (
    <Grid>
      < div >
        <br />
        <br />
        <h1>Lista ulubionych wydarzeń</h1>
        <br />
        {
          eventsToDisplay.map(event =>
            <Col xs={6} sm={3} key={event.id}>
              <Link to={'/events/' + event.id}>
                <Thumbnail bsClass="event-thumbnail" src={process.env.PUBLIC_URL + '/img/events/' + event.image}
                           alt="242x200">
                  <h3 className="cardheader">{event.name}</h3>

                  <p>
                    <Button bsStyle="primary">{event.price} PLN</Button>&nbsp;
                    <Button bsStyle="default">{event.date}</Button>
                  </p>
                </Thumbnail>
              </Link>
            </Col>
          )

        }
        <Row>
          <Col sm={6} smOffset={2}>
            <MultiMapView searchedEvents={eventsToDisplay}/>
          </Col>
        </Row>
      </div>
    </Grid>
  )
}

export default connect(mapStateToProps)(FavoritesEventsView)