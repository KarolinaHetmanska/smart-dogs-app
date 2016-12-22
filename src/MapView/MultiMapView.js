import React from 'react'
import GoogleMap from 'google-map-react'
import PlaceMarker from './PlaceMarker'
import {events, places} from '../data'

export default (props) => {

  const placesOfEvents = places.filter(
    place =>
      props.searchedEvents.find(
        event =>
        place.events.indexOf(event.id) !== -1
      )
  )
  {
    console.log(placesOfEvents)
  }

  return (
    <div style={{height: 600, width: '100%'}}>
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
              <PlaceMarker lat={place.lat}
                           lng={place.lng}
                           text={place.name}> </PlaceMarker>
          )
        }
      </GoogleMap>
    </div>
  )
}
