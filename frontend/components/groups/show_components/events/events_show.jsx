import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../../../navbar/navbar_container';
import FooterContainer from '../../../footer/footer_container';

class EventsShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        const dt = new Date(this.props.event.starttime);
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

        let map = window.mapMarkerURL;

        return (
            <>
                <NavbarContainer navType={"groups_create"} myType={""} />
                <div className="event-show-banner-full">
                <div className="event-show-banner">
                    <div className="event-calendar-date-image">
                        <div>{day}</div>
                        <div>{month}</div>
                    </div>
                    <div className="event-details-container">
                        <div className="event-details-date" >{dayName + ' ' + month + ' ' + day + ' ' + year + ' ' + hour + ':' + mins + ' ' + meridiem}</div>
                        <div className="event-details-title">{this.props.event.eventname}</div>
                        <div className="event-show-icon-wrapper" >
                            <div className="event-show-icon" >
                                <img src={map} />
                            </div>
                            <div className="event-loc-img" >&nbsp;&nbsp;{this.props.event.location}</div>
                        </div>

                        <div>Hosted by <Link to={`/groups/${this.props.group.id}/`} className="event-edit-link" >{this.props.group.groupname}</Link></div>
                        <div><Link to={`/events/${this.props.group.id}/edit`} className="event-edit-link" >Edit Event</Link></div>
                        <div><Link to={`/groups/${this.props.group.id}/`} className="event-delete-link" >Delete Event</Link></div>
                    </div>
                    <div className="event-attending-container">
                        <div className="event-attending-title">Are you attending?</div>
                        <div className="event-button-container">
                            {/* NEED TO ADD LOGIC TO ID IF THE USER HAS AN RSVP (EVENTID & USERID) */}
                            {/* When i create an event I should add the user to the event immediately
                            then if they come to event page they can delete the rsvp by pressing cancel button */}
                            <div className="event-button-selected">checked</div>
                            <div className="event-button-unselected"></div>
                            </div>
                        <div className="event-attending-status">You are currently attending</div>
                    </div>
                </div>
                </div>


                {/* <div>{this.props.event.starttime}</div> */}
                {/* <div>{this.props.event.eventname}</div> */}
                {/* <div>Details for: {this.props.group.groupname} <p>Event: {this.props.event.eventname}</p></div> */}

                {/* ----------------------------------------------------------------------------------------------------------------- */}
                {/* --   Body start here -------------------------------------------------------------------------------------------- */}
                {/* ----------------------------------------------------------------------------------------------------------------- */}
                <div className="event-show-body-full">

                    <div className="event-show-body">
                        <div className="event-data-section">
                            <div className="event-data-title">Details</div>
                            <div>{this.props.event.description}</div>
                        </div>
                        <div className="event-map-section">map goes here</div>
                    </div>
                </div>
                
                
                
                {/* <p>
                {this.props.event.eventname}
                </p><p>
                {this.props.event.description}
                </p><p>
                {this.props.event.starttime}
                </p><p>
                {this.props.event.endtime}
                </p><p>
                {this.props.event.location}
                </p><p>
                {this.props.event.group_id}
                </p> */}


                <FooterContainer myType={"groups"} />
            </>
        )
    }
}

export default EventsShow;