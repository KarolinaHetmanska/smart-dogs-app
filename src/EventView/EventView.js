import React from 'react'
import { events } from '../data'

// <h1>Event {props.params.eventId}</h1>

export default (props) =>
  <div>

    <h2>
      {
        events.find(
          event => event.id === parseInt(props.params.eventId)
        ).name
      }
    </h2>
    <p>
      {
        events.filter(
          event => event.id === parseInt(props.params.eventId)
        ).map(
          event =>
            <div key={event.id}>
              <p>{event.id}</p>
              <p><h1>{event.name}</h1></p>
              <p><img src={process.env.PUBLIC_URL + '/img/' + event.image} /></p>
              <p>{event.date}</p>
              <p>{event.category}</p>
              <p>{event.hour}</p>
              <p>{event.duration}</p>
              <p>{event.price}</p>
              <p>{event.description}</p>
            </div>
        )
      }
    </p>
  </div>