import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {events} from '../data'
import './EventsView.css';

export default (props) => {
 return (
   <div>
     <h1>Events</h1>
     <div>
       {
         (props.events || events).map(event =>
           <Col xs={3} key={event.id}>
             <div className="eventSquare">
               <Link to={'/events/' + event.id}>
                 {event.name}
                 <div style={{backgroundImage: 'url(' + (process.env.PUBLIC_URL + '/img/' + event.image) + ')'}} />
                 <img src={process.env.PUBLIC_URL + '/img/' + event.image} />
               </Link>
             </div>
           </Col>
         )
         }
     </div>
     {props.children}

   </div>
 )
}
