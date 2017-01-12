import React from 'react'
import {Grid} from 'react-bootstrap'
import {EventsListView} from '../EventsListView'

export default (props) => {
  return (
    <Grid>
      <div>
        <h1>Lista wydarzeń</h1>
        <br />
        <EventsListView />
      </div>
      {props.children}
    </Grid>
  )
}
