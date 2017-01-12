import React from 'react'
import {Col, Thumbnail, Button} from 'react-bootstrap'
import {Link} from 'react-router'
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
            <div className="event-thumbnail">
              <Link className="thumbnail-no-highlight" to={'/events/' + event.id}>

                <img src={process.env.PUBLIC_URL + '/img/events/' + event.image} alt="242x200"/>
                <h3 className="thumbnail-cardheader">{event.name}</h3>
              </Link>
              <div className="thumbnail-details">
                <span className="add-to-favorites-toggle-button"><span
                className="glyphicon glyphicon-heart-empty"></span> Zapisz</span>
                <p><span className="glyphicon glyphicon-list-alt"></span><span> {event.hour}.00 | </span>{event.date}
                </p>
                <p><span className="glyphicon glyphicon-map-marker"></span> {event.city}</p>
                <br />
                <p><span className="thumbnail-price">{event.price} PLN</span><span
                  className="thumbnail-category">{event.category}</span></p>
              </div>
            </div>
          </Col>
        )
                                               }
    </div>

  )
}
export default connect(mapStateToProps)(EventsListView)
