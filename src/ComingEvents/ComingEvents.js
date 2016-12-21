import React from 'react'
import {events} from '../data'
import {Link} from 'react-router'
import {Col, Thumbnail, Button} from 'react-bootstrap'

export default (props) => (
  <div>
    {

      events.sort(
        (a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
      ).slice(0, 8)
        .map(
          event =>
            <Col xs={6} sm={3} key={event.id}>
              <Link to={'/events/' + event.id}>
                <Thumbnail bsClass="event-thumbnail" src={process.env.PUBLIC_URL + '/img/events/' + event.image}
                           alt="242x200">
                  <h3 className="cardheader">{event.name}</h3>
                  <p>Description</p>
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