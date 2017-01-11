import React from 'react'
import {Col, Thumbnail, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {events} from '../data'
import './EventsListView.css'

export default (props) => {
  return (
    <div>
      {
        (props.events || events).map(event =>
          <Col xs={6} sm={3} key={event.id}>
            <Link className="thumbnail-no-highlight" to={'/events/' + event.id}>
              <div className="event-thumbnail">
                <img src={process.env.PUBLIC_URL + '/img/events/' + event.image} alt="242x200" />
                <h3 className="cardheader">{event.name}</h3>
                <p><span>{event.hour}.00 | </span>{event.date}</p>
                <p>{event.price} PLN<span className="thumbnail-category">{event.category}</span></p>

              </div>
            </Link>
          </Col>
        )
      }
    </div>

  )
}

