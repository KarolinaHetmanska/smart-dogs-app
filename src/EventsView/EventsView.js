import React from 'react'
import { events } from '../data'

export default (props)  =>
  <div>
    <h1>Events</h1>
    <div>
      {
        events.map(event =>
          <div key={event.id}>
            {event.name} {event.image}
          </div>
        )
      }
    </div>
    {props.children}

  </div>