import React from 'react'
import {EventsListView} from '../EventsListView'

import './EventsView.css';

// <div style={{backgroundImage: 'url(' + (process.env.PUBLIC_URL + '/img/' + event.image) + ')'}}/>

export default (props) => {
  return (
    <div>
      <div>
        <h1>Lista wydarzeń</h1>
        <br />
        <EventsListView />
      </div>
      {props.children}
    </div>
  )
}
