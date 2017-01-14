import React from 'react'
import {
  Grid,
  Col,
  Row
} from 'react-bootstrap'


import {MultiMapView} from '../MapView'
import {FavoritesListView} from '../FavoritesListView'

import {connect} from 'react-redux'

const mapStateToProps = state => ({
  favoritesEvents: state.favoritesData.favoritesEvents,
  allEvents: state.allEventsData.allEvents
})

const FavoritesEventsView = props => {

  const eventsToDisplay = props.allEvents.filter(
    event => props.favoritesEvents.indexOf(event.id) !== -1
  )
  if (props.favoritesEvents.length > 0) {
    return (
      <Grid>
        < div >
          <br />
          <br />
          <h1>Twoje ulubione wydarzenia.</h1>
          <br />
          <FavoritesListView events={eventsToDisplay}/>
          <Row>
            <Col sm={10} smOffset={1}>
              <MultiMapView searchedEvents={eventsToDisplay}/>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  } else {
    return (
      <Grid>
        < div >
          <br />
          <br />
          <h1>Twoje ulubione wydarzenia.</h1>
          <br />
          <h2> Nie masz żadnych wydarzeń dodanych do ulubionych.</h2>
        </div>
      </Grid>
    )


  }

}

export default connect(mapStateToProps)(FavoritesEventsView)