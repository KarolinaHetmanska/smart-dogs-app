import React from 'react'
import GoogleMap from 'google-map-react'
import {connect} from 'react-redux'
import PlaceMarker from './PlaceMarker'
import './MultiMapView.css'


const mapSateToProps = (state) => ({
  places: state.placesData.places
})

const MultiMapView = (props) => {

  const placesOfEvents = props.places.filter(
    place =>
      props.searchedEvents.find(
        event =>
        place.events.indexOf(event.id) !== -1
      )
  )

  //console.log(placesOfEvents, 'places of events')
  return (
    <div>
      <h1>Wybrane wydarzenia na mapie:</h1>
      <br/>
      <div className="map-container" style={{width: props.mapWidth}}>
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
    </div>
  )
}

export default connect(mapSateToProps)(MultiMapView)