import React from 'react'
import {Col} from 'react-bootstrap'
import moment from 'moment'
import 'moment/locale/pl';
import {Link} from 'react-router'
import './EventsListView.css'

import {connect} from 'react-redux'

const mapStateToProps = state => ({
  allEvents: state.allEventsData.allEvents
})

// <img src={process.env.PUBLIC_URL + '/img/events/' + event.image} alt="242x200"/>

const EventsListView = props => {
  return (
    <div>
      {
        (props.events || props.allEvents).map(event =>
          <Col xs={6} sm={3} key={event.id}>
            <div className="event-thumbnail">
              <Link className="thumbnail-no-highlight" to={'/events/' + event.id}>

                <div className="thumbnail-image"
                     style={{backgroundImage: "url(" + process.env.PUBLIC_URL + '/img/events/' + event.image + ")"}}></div>
                <h3 className="thumbnail-cardheader">{event.name}</h3>
              </Link>
              <div className="thumbnail-details">
                <span className="add-to-favorites-toggle-button">
                  <span className="glyphicon glyphicon-heart-empty"></span> Zapisz
                </span>
                <p><span className="glyphicon glyphicon-list-alt"></span><span> {event.hour}.00 | </span>{moment(event.date).format('dddd, LL').charAt(0).toUpperCase() + moment(event.date).format('dddd, LL').slice(1)}
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
