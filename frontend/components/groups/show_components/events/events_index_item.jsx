import React from 'react';
import jstz from 'jstz';
import momentTimeZone from 'moment-timezone';

const EventsIndexItem = props => {
    // var tz 

    // if (!sessionStorage.getItem('timezone')) {
    //     tz = jstz.determine() || 'UTC';
    //     sessionStorage.setItem('timezone', tz.name());
    // }
    // var currTz = sessionStorage.getItem('timezone');
    // console.log(currTz);

    // var x = new Date();
    // var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
    // console.log(currentTimeZoneOffsetInHours);

    const dt = new Date(props.event.starttime);
    const currentTimeZoneOffsetInHours = dt.getTimezoneOffset() / 60;
    // console.log(dt);
    dt.setHours(dt.getHours() + currentTimeZoneOffsetInHours);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const dayName = days[dt.getDay()];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const month = months[dt.getMonth()];
    // MyDate.getDate()).slice(-2)
    const day = ('0' + dt.getDate()).slice(-2);
    const year = dt.getFullYear();
    let hour = dt.getHours();
    const mins = ('0' + dt.getMinutes()).slice(-2);
    let meridiem;

    // debugger
    switch (true) {
        case hour === 0:
            // debugger
            hour = 12;
            meridiem = 'AM';
            break;
        case hour === 12:
            // debugger
            hour = 12;
            meridiem = 'PM';
            break;
        case hour > 12:
            // debugger
            hour = hour - 12;
            meridiem = 'PM';
            break;
        default:
            // debugger
            hour = hour;
            meridiem = 'AM';
            break;
    }

    hour = ('0' + hour).slice(-2);

    return (
        <>
        <li>
            {/* <div className="event-list-div"> */}
                <div className="event-border-space" > 
                    <div className="event-box">
                        <div className="event-date" >Date: </div>
                        <div className="event-data" >{props.event.starttime}</div>
                    </div>

                    <div className="event-box">
                        <div className="event-date" >Date: </div>
                        <div className="event-data" >{dt.toString()}</div>
                    </div>

                    <div className="event-box">
                        <div className="event-date" >Date: </div>
                        <div className="event-data" >{dayName + ' ' + month + ' ' + day + ' ' + year + ' ' + hour + ' ' + mins + ' ' + meridiem}</div>
                    </div>

                    <div className="event-box">
                        <div className="event-titles" >EVENT: </div>
                        <div className="event-data" >{props.event.eventname}</div>
                    </div>

                    <div className="event-box">
                        <div className="event-titles" >LOCATION: </div>
                        <div className="event-data" >{props.event.location}</div>
                    </div>

                    <div className="event-box">
                        <div className="event-titles" >DESCRIPTION: </div>
                        <div className="event-data" >{props.event.description}</div>
                    </div>
                </div>
            {/* </div> */}
        </li>
        </>
    )
};

export default EventsIndexItem