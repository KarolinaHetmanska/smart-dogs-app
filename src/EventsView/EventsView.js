import React from 'react'
import { Link } from 'react-router'
import { events } from '../data'

export default (props)  =>
  <div>
    <h1>Events</h1>
    <div>
      {
        events.map(event =>
          <div key={event.id}>
            <Link to={'/events/' + event.id}>
              {event.name}
            </Link>
          </div>
        )
      }
    </div>
    {props.children}

  </div>