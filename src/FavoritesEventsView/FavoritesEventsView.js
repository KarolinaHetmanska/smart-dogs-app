import React from 'react'
import {
  Grid,
  Col,
  Row
} from 'react-bootstrap'


import {MultiMapView} from '../MapView'
import {EventsListView} from '../EventsListView'

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
        <Row>
          <br />
          <br />
          <h1>Twoje ulubione wydarzenia</h1>
          <br />
          <EventsListView events={eventsToDisplay}/>
        </Row>
        <Row>
            <MultiMapView searchedEvents={eventsToDisplay}/>
        </Row>

      </Grid>
    )
  } else {
    return (
      <Grid>
        < div >
          <br />
          <br />
          <h1>Twoje ulubione wydarzenia</h1>
          <br />
          <h2> Nie masz żadnych wydarzeń dodanych do folderu ulubione</h2>
        </div>
      </Grid>
    )


  }

}

export default connect(mapStateToProps)(FavoritesEventsView)