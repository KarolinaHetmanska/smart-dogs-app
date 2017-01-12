import React from 'react'
import {places} from '../data'
import {Thumbnail} from 'react-bootstrap'
import {Link} from 'react-router'

export default (props) =>
  <div>
    <h1>Places view</h1>
    <br />{props.children}
    <div>
      {
        props.params.placeId === undefined ?
          places.map(place =>
          <Link to={'/places/' + place.id}>
          <Thumbnail src={process.env.PUBLIC_URL + '/img/places/' + place.image} alt="242x200">
            <h3 className="cardheader">{place.name}</h3>
            <div key={place.id}>
              <p> {place.city} ul.{place.address} </p>
            </div>
          </Thumbnail>
            </Link>
        ) : null
      }
    </div>


  </div>





