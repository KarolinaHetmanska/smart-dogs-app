import React from 'react'
import {MapView} from '../MapView'
import {events, places} from '../data'
import {Grid, Row, Col} from 'react-bootstrap'
import './SingleEventview.css'

export default (props) => {

  const placeOfEvent = places.find(
    place => place.events.indexOf(parseInt(props.params.eventId)) !== -1
  )

  return (
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
                  <p>Adres: {placeOfEvent.address}</p>
                  <p>Miasto: {placeOfEvent.city}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} smOffset={2}>
                  <p>{event.description}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={6} smOffset={1}>
                  <MapView event={props.params.eventId}/>
                  {console.log(props.params.eventId)}
                </Col>
              </Row>
            </div>
        )
      }
    </Grid>
  )
}