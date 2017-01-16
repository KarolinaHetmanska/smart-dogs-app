import React from 'react'
import BigCalendar from 'react-big-calendar';

import moment from 'moment'
BigCalendar.momentLocalizer(moment);
moment.locale("pl");

// import {Col} from 'react-bootstrap'
// import {Link} from 'react-router'
// import './EventsListView.css'

import {connect} from 'react-redux'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const mapStateToProps = state => ({
  favoritesEvents: state.favoritesData.favoritesEvents,
  allEvents: state.allEventsData.allEvents
})

const mapDispatchProps = dispatch => ({
  addEventToFavorites: (eventId) => dispatch({
    type: 'ADD_EVENT_TO_FAVORITES',
    eventId: eventId
  }),
  removeEventFromFavorites: (eventId) => dispatch({
    type: 'REMOVE_EVENT_FROM_FAVORITES',
    eventId: eventId
  })
})

const EventsCalendar = props => {
  const eventsFiltered = props.allEvents.filter(
    event => props.favoritesEvents.indexOf(event.id) !== -1
  )
  let eventsToDisplayInCalendar = eventsFiltered.map(
    event =>
      event.start = new Date(event.date).valueOf()
  )

  // for (var i = 0; i < eventsFiltered.length; i++) {
  //   eventsFiltered[i].title = eventsFiltered[i].name;
  //   // eventsToDisplayInCalendar[i].start = new Date(eventsToDisplayInCalendar[i].date).valueOf();
  //   delete eventsFiltered[i].name;
  //   // delete eventsToDisplayInCalendar[i].date;
  // }

  const myEventsList = [
    {
      title: 'Dwie zupy',
      start: new Date(2017, 0, 3),
      end: new Date(2017, 0, 5)
    },
    {
      title: 'Long Zupa',
      start: 1484479400000,
      end: 1484493200000
    },
    {
      title: 'Some Zupa',
      start: 1484377200000,
      end: 1484386200000
    },
    {
      title: 'Conference Zupa',
      start: new Date(2017, 0, 13, 13, 0, 0),
      end: new Date(2017, 0, 13, 18, 0, 0)
    },
    {
      title: 'Meeting Zup',
      start: new Date(2017, 0, 10, 10, 30, 0, 0),
      end: new Date(2017, 0, 10, 12, 30, 0, 0)
    },
    {
      title: 'Lunch Zupa',
      start: new Date(2017, 0, 9, 12, 0, 0, 0),
      end: new Date(2017, 0, 9, 13, 0, 0, 0)
    }
  ]


  return (
    <div>
      <h1>Zaplanowane wydarzenia</h1>
      <div style={{height: 400}}>
        {console.log(myEventsList)}
        {console.log(props.favoritesEvents)}
        {console.log(eventsFiltered)}
        {console.log(eventsToDisplayInCalendar)}

        <BigCalendar
          events={myEventsList}
          startAccessor={myEventsList.start}
          endAccessor={myEventsList.end}
        />
      </div>
    </div>

  )
}
export default connect(mapStateToProps, mapDispatchProps)(EventsCalendar)
