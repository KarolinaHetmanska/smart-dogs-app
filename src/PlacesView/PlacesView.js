import React from 'react'
import { places } from '../data'

export default (props)  =>
<div>
  <h1>Places</h1>
  <div>
    {
      places.map(place =>
      <div key={place.id}>
        {place.name} + {place.address} + {place.city} + {place.image}
      </div>
      )
    }
  </div>
  {props.children}

</div>