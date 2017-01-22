import React from 'react'
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {SingleMapView} from '../MapView'
import {EventsListView} from '../EventsListView'
import {CommentsView} from '../CommentsView'
import './PlaceView.css'


const mapStateToProps = (state) => ({
  places: state.placesData.places,
  allEvents: state.allEventsData.allEvents
})

const PlaceView = (props) =>

  <div>
    <div>
      {
        props.places.filter(place =>
          place.id === parseInt(props.params.placeId, 10)
        ).map(place =>
          <div className="singleEvent-container" key={place.id}>
            <Row>
              <Col sm={12}>
                <div className="place-main-image"
                     style={{
                       backgroundImage: "url(" + process.env.PUBLIC_URL +
                       '/img/places/' + place.image + ")"
                     }}></div>
              </Col>
            </Row>

            <Row className="row place-decriptionandevents-row">
              <Col sm={4}>
                <h1>{place.name}</h1>
                <h4>{place.city} </h4>
                <h4> ul.{place.address}</h4>
                <br/>
                <span><a href="">WWW</a></span>
                <br/>
                <p><a href="#place-comments-view">Sprawdź opinie na temat tej lokalizacji</a></p>
              </Col>

              <div className="place-events-list-thumbanil">
                <EventsListView colWidthSm={4} colWidthMd={3}
                                events={props.allEvents.filter(event =>
                                    // I put "-1" because "props.places" is an array, and its items start with number O, but "events.json" is an object and its ids starts with 1
                                  props.places[parseInt(props.params.placeId) - 1].events.indexOf(event.id) !== -1
                                )
                                }
                />
              </div>

            </Row>

            <Row>
              <Col sm={10} smOffset={1}>
                <SingleMapView placeOfEvent={place} />
              </Col>
            </Row>
            <div>

              <Row id="place-comments-view">
                <CommentsView {...props} />
              </Row>
            </div>
          </div>
        )
      }
    </div>
  </div>

export default connect(mapStateToProps)(PlaceView)