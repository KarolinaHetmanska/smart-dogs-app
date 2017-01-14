import React from 'react'
import GoogleMap from 'google-map-react'
import PlaceMarker from './PlaceMarker'
import './SingleMapView.css'

export default (props) => {

  const placeOfEvent = props.placeOfEvent

  return (
    <div className="map-container">
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
