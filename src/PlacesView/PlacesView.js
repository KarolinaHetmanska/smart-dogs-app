import React from 'react'
import {places} from '../data'

export default (props)  =>
<div>
  <h1>Places</h1>
  <ul>
    {
      places.map(place =>
      <li key={place.id}>
        {place.name} + {place.address} + {place.city} + {place.image}
      </li>
      )
    }
  </ul>
  {props.children}

</div>