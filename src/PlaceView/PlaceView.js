import React from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {SingleMapView} from '../MapView'

const mapStateToProps = (state) => ({
  places: state.placesData.places
})

const PlaceView = (props) =>

  <div>
    <h1>One place view</h1>
    <div>
      {
        props.places.filter(place =>
          place.id === parseInt(props.params.placeId)
        ).map(place =>
          <div className="singleEvent-container" key={place.id}>
            <Row>
              <Col sm={4} smOffset={2}>
                <img className="event-img" role="presentation"
                     src={process.env.PUBLIC_URL + '/img/places/' + place.image}/>
              </Col>
              <Col sm={4}>
                <h1 className="event-name">{place.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col sm={6} smOffset={2}>
                <SingleMapView placeOfEvent={place}/>
              </Col>
            </Row>
          </div>
        )
      }
    </div>
  </div>

export default connect(mapStateToProps)(PlaceView)