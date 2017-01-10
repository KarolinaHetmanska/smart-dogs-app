import React from 'react'
import GoogleMap from 'google-map-react'
import PlaceMarker from './PlaceMarker'
import {places} from '../data'

export default (props) => {

  const placeOfEvent = places.find(
    place => place.events.indexOf(parseInt((props.event),10)) !== -1
    )

  return (
    <div style={{height: 400, width: 800}}>
      <GoogleMap
        bootstrapURLKeys={{key: "AIzaSyBNloCLIiE_DmpryAJU16mwcr46EyQu2Fg"}}
        defaultCenter={{
          lat: placeOfEvent.lat,
          lng: placeOfEvent.lng
        }}
        defaultZoom={16}>
        <PlaceMarker lat={placeOfEvent.lat}
                     lng={placeOfEvent.lng}
                     text={placeOfEvent.name}> </PlaceMarker>
      </GoogleMap>
    </div>
  )
}
