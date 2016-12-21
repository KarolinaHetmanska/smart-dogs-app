import React from 'react'
import {events} from '../data'
import {Grid, Row, Col} from 'react-bootstrap'
import './Eventview.css'

export default (props) => (
  <Grid>
    {
      events.filter(
        event => event.id === parseInt(props.params.eventId)
      ).map(
        event =>
          <div className="singleEvent-container" key={event.id}>
            <Row>
              <Col sm={4} smOffset={2}>
                <img className="event-img" src={process.env.PUBLIC_URL + '/img/events/' + event.image}/>
              </Col>
              <Col sm={4}>
                <h1 className="event-name">{event.name}</h1>
                <p>Data: {event.date}</p>
                <p>Kategoria: {event.category}</p>
                <p>Godzina: {event.hour}.00</p>
                <p>Czas trwania: {event.duration} min</p>
                <p>Cena: {event.price} PLN</p>
                <p>{event.description}</p>
              </Col>
            </Row>
          </div>
      )
    }
  </Grid>
)