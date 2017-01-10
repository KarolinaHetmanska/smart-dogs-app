import React from 'react'
import {Col, Thumbnail, Button} from 'react-bootstrap'
import {Link} from 'react-router'
//import {events} from '../data'
import './EventsListView.css'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
  allEvents: state.eventsData.allEvents
})

const EventsListView = props => {
  return (
    <div>
      {
        (props.events || props.allEvents).map(event =>
          <Col xs={6} sm={3} key={event.id}>
            <Link to={'/events/' + event.id}>
              <Thumbnail bsClass="event-thumbnail" src={process.env.PUBLIC_URL + '/img/events/' + event.image} alt="242x200">
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
export default connect(mapStateToProps)(EventsListView)
