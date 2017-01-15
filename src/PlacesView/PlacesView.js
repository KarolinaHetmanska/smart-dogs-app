import React from 'react'
import { connect } from 'react-redux'
import { Thumbnail } from 'react-bootstrap'
import { Link } from 'react-router'

const mapStateToProps = (state) => ({
  places: state.placesData.places
})

const placesView = (props) =>
  <div>
    <h1>Places view</h1>
    <br />{props.children}
    <div>
      {
        props.params.placeId === undefined ?
          props.places.map(place =>
            <Link to={'/places/' + place.id} key={place.id}>
              <Thumbnail src={process.env.PUBLIC_URL + '/img/places/' + place.image} alt="242x200">
                <h3 className="cardheader">{place.name}</h3>
                <div>
                  <p> {place.city} ul.{place.address} </p>
                </div>
              </Thumbnail>
            </Link>
          ) : null
      }
    </div>
  </div>

export default connect(mapStateToProps)(placesView)





