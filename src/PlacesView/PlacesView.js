import React from 'react'
import {connect} from 'react-redux'
import {Thumbnail, Grid, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router'
import './PlacesView.css'

const mapStateToProps = (state) => ({
  places: state.placesData.places
})

const placesView = (props) =>
  <Grid className="places-view-container">
    <h1>Places View</h1>
    <br/>{props.children}
    {
      props.params.placeId === undefined ?
        props.places.map(place =>

          <div>
            <Col xs={12} lg={5} className="thumbnail places-thumbnail">
              <Link to={'/places/' + place.id}>
                <Col xs={6} md={6}>
                  <Thumbnail alt="171x180"
                             src={process.env.PUBLIC_URL + '/img/places/' + place.image} responsive/>
                </Col>
              </Link>
              <Col xs={6} lg={6} className="thumbnail-description-box">
                <h3 className="thumbnail-header">{place.name}</h3>
                <p className="thumbnail-address"><span className="glyphicon glyphicon-map-marker"/>  {place.city}, ul.{place.address}</p>

              </Col>
              <Link to={'/places/' + place.id}>
                <span className="thumbnail-szczegóły">szczegóły</span>
              </Link>

            </Col>

          </div>
        ) : null
    }
  </Grid>

export default connect(mapStateToProps)(placesView)





