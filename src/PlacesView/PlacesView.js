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
    <br/>{props.children}
    {
      props.params.placeId === undefined ?
        props.places.map(place =>

            <Col xs={12} lg={5} >
              <div className="thumbnail thumbnail-places">
                <Col xs={6} md={6}>
                  <Link to={'/places/' + place.id}>
                  <div className="thumbnail-image-box"
                       style={{backgroundImage: "url(" + process.env.PUBLIC_URL + '/img/places/' + place.image + ")"}}></div>
                  </Link>
                </Col>
              <Col xs={6} lg={6} className="thumbnail-description-box">
                <h3 className="thumbnail-header">{place.name}</h3>
                <p className="thumbnail-address"><span className="glyphicon glyphicon-map-marker"/>  {place.city}
                  <br/> ul.{place.address}</p>

              </Col>
              <Link to={'/places/' + place.id}>
                <span className="thumbnail-szczegóły">szczegóły</span>
              </Link>
              </div>
            </Col>

        ) : null
    }
  </Grid>

export default connect(mapStateToProps)(placesView)





