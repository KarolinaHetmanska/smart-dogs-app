import React from 'react'
import {places} from '../data'
import {Thumbnail, Row, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import {SingleMapView} from '../MapView'

// const mapStateToProps = state => ({
//   onePlace: state.placeData.onePlace
// })

const PlaceView = (props) =>

  <div>
    <h1>One place view</h1>
    <div>
      {
        places.filter(place =>
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
            </Row>
          </div>
        )
      }
    </div>
  </div>

export default PlaceView