import React from 'react'
import {events} from '../data'
import './Eventview.css'

export default (props) =>
  <div>
    {
      events.filter(
        event => event.id === parseInt(props.params.eventId)
      ).map(
        event =>
          <div className="singleEvent-container" key={event.id}>
            <p><img className="event-img" src={process.env.PUBLIC_URL + '/img/' + event.image}/></p>
            <p><h1>{event.name}</h1></p>
            <p>Data: {event.date}</p>
            <p>Kategoria: {event.category}</p>
            <p>Godzina: {event.hour}.00</p>
            <p>Czas trwania: {event.duration} min</p>
            <p>Cena: {event.price}</p>
            <p>{event.description}</p>
          </div>
      )
    }
  </div>