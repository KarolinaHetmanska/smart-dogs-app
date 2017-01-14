import React from 'react'
import GoogleMap from 'google-map-react'
import {Grid} from 'react-bootstrap'
import PlaceMarker from './PlaceMarker'
import {places} from '../data'
import './MultiMapView.css'

export default (props) => {

  const placesOfEvents = places.filter(
    place =>
      props.searchedEvents.find(
        event =>
        place.events.indexOf(event.id) !== -1
      )
  )

  return (
    <Grid>
      <hr/>
      <h1>Wybrane wydarzenia na mapie:</h1>
      <br/>
      <div className="map-container">
        <GoogleMap
          bootstrapURLKeys={{key: "AIzaSyBNloCLIiE_DmpryAJU16mwcr46EyQu2Fg"}}
          defaultCenter={{
            lat: 54.405,
            lng: 18.595
          }}
          defaultZoom={11}>
          {
            placesOfEvents.map(
              place =>
                <PlaceMarker key={place.id}
                             lat={place.lat}
                             lng={place.lng}
                             text={place.name}> </PlaceMarker>
            )
          }
        </GoogleMap>
      </div>
    </Grid>
  )
}
