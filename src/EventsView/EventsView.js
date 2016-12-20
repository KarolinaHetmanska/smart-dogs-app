import React from 'react'
import {Col, Thumbnail, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {events} from '../data'
import {EventsListView} from '../EventsListView'

import './EventsView.css';

// <div style={{backgroundImage: 'url(' + (process.env.PUBLIC_URL + '/img/' + event.image) + ')'}}/>

export default (props) => {
  return (
    <div>
      <h1>Events</h1>
      <EventsListView />
    </div>
  )
}
