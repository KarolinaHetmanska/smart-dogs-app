import React from 'react'
import { places } from '../data'
import { Thumbnail } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  onePlace: state.placeData.onePlace
})

const PlaceView = (props) =>
  <div>
    <h1>Miejsca Wydarzeń</h1>
    <br />
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

export default connect(mapStateToProps)(PlaceView)