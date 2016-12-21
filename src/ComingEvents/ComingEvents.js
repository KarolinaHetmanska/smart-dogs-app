import React from 'react'
import {events} from '../data'

export default (props) => (
  <div>
    {

      events.sort(
        (a,b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
      ).map(
    event => <p>{event.name}</p>
    )
    }
  </div>
)
