import React from 'react'
import {places} from '../data'
import {Thumbnail} from 'react-bootstrap'

export default (props) =>
  <div>
    <h1>Places</h1>
    <div>
      {
        places.map(place =>
          <Thumbnail src={process.env.PUBLIC_URL + '/img/places/' + place.image} alt="242x200">
            <h3 className="cardheader">{place.name}</h3>
            <div key={place.id}>
              <p> {place.city} ul.{place.address} </p>
            </div>
          </Thumbnail>
        )
      }
    </div>
    {props.children}

  </div>