import React from 'react'
import {
  Button,
  Thumbnail,
  Col
} from 'react-bootstrap'
import {Link} from 'react-router'

import {connect} from 'react-redux'

const mapStateToProps = state => ({
  favoritesEvents: state.favoritesData.favoritesEvents,
  allEvents: state.eventsData.allEvents
})

const FavoritesEventsView = props => {

  return (
    < div >
      {console.log(props.favoritesEvents)}
      {
        props.allEvents.filter(
          event => props.favoritesEvents.indexOf(event.id) !== -1
        ).map(event =>
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
    </div>
  )
}

export default connect(mapStateToProps)(FavoritesEventsView)