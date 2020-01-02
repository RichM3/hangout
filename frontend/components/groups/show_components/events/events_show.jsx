import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../../../navbar/navbar_container';
import FooterContainer from '../../../footer/footer_container';

class EventsShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            attending: false
        };
        this.attendEvent = this.attendEvent.bind(this);
        this.declineEvent = this.declineEvent.bind(this);
    }

    checkRsvps() {
        if (typeof (this.props.rsvp) !== "undefined") {
            if (this.props.rsvp.attending === true) {
                this.setState({ attending: true });
            }
        }
    }



    

    componentDidMount() {
        this.props.fetchAllRsvps(this.props.event.id)
            .then(() => this.checkRsvps());
        // this.props.fetchGroups();
    }

    // Scenarios: If I create the event, I automatically am attending
    // then I can use the RSVP ID to update to not attend

    // If I want to attend an event that I have not created the rsvp Id will be null 
    // therefore create and rsvp

    // If I decide to attend an event after declining the evert the RSVP.ID will exist and I will need to update

    attendEvent() {
        if (this.state.attending !== true) {
            this.setState({ attending: true });
            if (typeof (this.props.rsvp) === "undefined") {
                let rsvp = { userId: this.props.currentUser.id, eventId: this.props.event.id, attending: true };
                this.props.createRsvp(rsvp);
            } else {
                let rsvp = { id: this.props.rsvp.id, userId: this.props.rsvp.user_id, eventId: this.props.rsvp.event_id, attending: true };
                this.props.updateRsvp(rsvp);
            }
        }
    }

    declineEvent() {
        if (this.state.attending !== false) {
            this.setState({ attending: false });
            if (typeof (this.props.rsvp) === "undefined") {
                let rsvp = { userId: this.props.currentUser.id, eventId: this.props.event.id, attending: false };
                this.props.createRsvp(rsvp);
            } else {
                let rsvp = { id: this.props.rsvp.id, userId: this.props.rsvp.user_id, eventId: this.props.rsvp.event_id, attending: false };
                this.props.updateRsvp(rsvp);
            }
        }
    }

    render() {

        let rsvp = this.props.rsvp;

        // Buttons for RSVP info
        let attending;
        let attendingText;

        if (this.state.attending) {
            attendingText = (<p>You are attending</p>)
        } else {
            attendingText = (<p>You are not currently attending</p>)
        }

        if (this.props.isMember) {
            if (typeof(rsvp) === "undefined") {
                attending = (
                    <>
                        <div id="attendEvent" className={this.state.attending ? "event-button-selected" : "event-button-unselected"}
                        onClick={this.attendEvent}><i className="fas fa-check"></i></div>
                        <div id="declineEvent" className={this.state.attending ? "event-button-unselected" : "event-button-selected"}
                        onClick={this.declineEvent}><i className="far fa-times-circle"></i></div>
                    </>
                )
            } else if (rsvp.attending === true) {
                attending = (
                    <>
                        <div id="attendEvent" className={this.state.attending ? "event-button-selected" : "event-button-unselected"}
                            onClick={this.attendEvent}><i className="fas fa-check"></i></div>
                        <div id="declineEvent" className={this.state.attending ? "event-button-unselected" : "event-button-selected"}
                            onClick={this.declineEvent}><i className="far fa-times-circle"></i></div>
                    </>
                )
            } else {
                attending = (
                    <>
                        <div id="attendEvent" className={this.state.attending ? "event-button-selected" : "event-button-unselected"}
                            onClick={this.attendEvent}><i className="fas fa-check"></i></div>
                        <div id="declineEvent" className={this.state.attending ? "event-button-unselected" : "event-button-selected"}
                            onClick={this.declineEvent}><i className="far fa-times-circle"></i></div>
                    </>
                )
            }
        } else {
            attending = (
                <>
                    <div id="attendEvent" className="event-button-disabled"><i className="fas fa-check"></i></div>
                    <div id="declineEvent" className="event-button-disabled"><i className="far fa-times-circle"></i></div>
                </>
            )
            attendingText = (<p>You must be a group member to attend events</p>)
        }


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

                        <div className="event-edit-link-div">Hosted by <Link to={`/groups/${this.props.group.id}/`} className="event-edit-link" >{this.props.group.groupname}</Link></div>
                        <div className="event-edit-link-div"><Link to={`/events/${this.props.event.id}/edit`} className="event-edit-link" >Edit Event</Link></div>
                        <div><Link to={`/groups/${this.props.group.id}/`} className="event-delete-link" onClick={() => this.props.deleteEvent(this.props.event.id)} >Delete Event</Link></div>
                    </div>
                    <div className="event-attending-container">
                        <div className="event-attending-title">Are you attending?</div>
                        <div className="event-button-container">
                            {attending}
                        </div>
                        <div className="event-attending-status">{attendingText}</div>
                    </div>
                </div>
                </div>

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

                <FooterContainer myType={"groups"} />
            </>
        )
    }
}

export default EventsShow;