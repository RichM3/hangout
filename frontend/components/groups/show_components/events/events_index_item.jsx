import React from 'react';
import { Link } from 'react-router-dom';

const EventsIndexItem = props => {
    return (
        <>
        <li>
        {/* <div className="event-stripe"> */}
            <div className="event-div">
                <div className="event-bottom-space" > 
                <div className="event-border-space" > 
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
                </div>
                    {/* <div className="event-spacer"> test </div> */}

            {/* <div>{props.event.starttime}</div> */}

            </div>
        {/* </div> */}
        </li>
        </>
    )
};

export default EventsIndexItem