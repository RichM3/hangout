import React from 'react';
import { Link } from 'react-router-dom';

const EventsIndexItem = props => {
    return (
        <div className="">
            <li>{props.event.eventname}</li>
            <li>{props.event.description}</li>
            <li>{props.event.location}</li>
            {/* <li>{props.event.starttime}</li> */}
        </div>
    )
};

export default EventsIndexItem