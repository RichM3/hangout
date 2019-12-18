import React from 'react';
import { Link } from 'react-router-dom';

const EventsIndexItem = props => {

    let map = window.mapMarkerURL;


    const dt = new Date(props.event.starttime);
    const currentTimeZoneOffsetInHours = dt.getTimezoneOffset() / 60;
    dt.setHours(dt.getHours() + currentTimeZoneOffsetInHours);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const dayName = days[dt.getDay()];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const month = months[dt.getMonth()];

    const day = ('0' + dt.getDate()).slice(-2);
    const year = dt.getFullYear();
    let hour = dt.getHours();
    const mins = ('0' + dt.getMinutes()).slice(-2);
    let meridiem;

    switch (true) {
        case hour === 0:
            hour = 12;
            meridiem = 'AM';
            break;
        case hour === 12:
            hour = 12;
            meridiem = 'PM';
            break;
        case hour > 12:
            hour = hour - 12;
            meridiem = 'PM';
            break;
        default:
            hour = hour;
            meridiem = 'AM';
            break;
    }

    hour = ('0' + hour).slice(-2);

    return (
        <>
        <li>
                <Link to={{
                    pathname:`/events/show/${props.event.id}`,
                    eventProps: {event: props.event},
                }} >
                <div className="event-border-space" > 
                    <div className="event-box">
                        <div className="event-date" >{dayName + ' ' + month + ' ' + day + ' ' + year + ' ' + hour + ':' + mins + ' ' + meridiem}</div>
                    </div>

                    <div className="event-box">
                        <div className="event-titles" >{props.event.eventname}</div>
                    </div>

                    <div className="event-box">
                        <div className="event-data" >{props.event.description}</div>
                    </div>

                    <div className="event-box">
                        <div className="group_show_icons" >
                            <img src={map} />
                        </div>
                        <div className="event-loc" >&nbsp;&nbsp;{props.event.location}</div>
                    </div>
                </div>
                </Link>
        </li>
        </>
    )
};

export default EventsIndexItem