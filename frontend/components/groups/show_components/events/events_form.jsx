import React from 'react';
import NavbarContainer from '../../../navbar/navbar_container';
import FooterContainer from '../../../footer/footer_container';

import { withRouter } from 'react-router-dom';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';

class EventsCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.convertDates = this.convertDates.bind(this);
        this.createEvent = this.createEvent.bind(this);
        this.setNewLocation = this.setNewLocation.bind(this);
    }

    setLocation() {
        const locValue = document.getElementById('location').value;
        this.setState({ location: locValue });
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        // Error checking needs to use error on page not in alert format
        if (this.errorcheck() ) {
            this.convertDates();
        }
    }

    createEvent() {
        this.props.action(this.state)
            // .then(() => this.props.history.push(`/events/show/${this.props.event.id}`));
            .then(() => this.props.history.push(`/events/show/${this.props.event.id}`));
    }

    selectAll() {
        document.getElementById("location").select();
    }

    errorcheck() {
        if (this.verifyEventName() && this.verifyEventDesc() && this.verifyLocation() && this.verifyDate() && this.verifyStartTimeValue() && this.verifyEndTime() && this.ensureEndGtrStart() && this.eventTimeB4CurrentTime() && this.locationInvalid() ) {
            return true;
        } else {
            return false
        }
    }

    eventTimeB4CurrentTime() {
        const newDate = new Date();
        const dateArr = newDate.toString().split(" ");
        const currentDateArr = dateArr.slice(1, 4);
        const currentTime = dateArr[4].slice(0, 5);
        const stDateCompareArr = this.state.startDate.toString().split(" ").slice(1, 4);

        // This allows me a dryer version of the code with less variables and steps
        if (JSON.stringify(stDateCompareArr) === JSON.stringify(currentDateArr) && this.state.starttimevalue < currentTime) {
            alert("Can't create an event in the past, please check the date");
            return false;
        } else {
            return true;
        }
    }

    locationInvalid() {
        if (this.state.location !== this.state.address) {
            alert("Please fill in a proper location");
            document.getElementById("location").select();
            return false;
        } else {
            return true;
        }
    }

    ensureEndGtrStart() {
        if (this.state.starttimevalue >= this.state.endtimevalue) {
            alert("End time is before start time");
            document.getElementById("endtimevalue").select();
            return false;
        } else {
            return true;
        }
    }
    
    verifyEventName() {
        if (this.state.eventname.trim() === '') {
            alert("Event name may not be blank");
            document.getElementById("eventname").focus();
            return false;
        }
        return true;
    }

    verifyEventDesc() {
        if (this.state.description.trim() === '') {
            alert("Event description may not be blank");
            document.getElementById("description").focus();
            return false;
        }
        return true;
    }

    verifyLocation() {
        if (this.state.location.trim() === '') {
            alert("Event location may not be blank");
            document.getElementById("location").focus();
            return false;
        }
        return true;
    }

    verifyDate() {
        if (typeof (this.state.date) === "undefined") {
            alert("All events require a date ");
            document.getElementById("eventdate").select();
            window.scrollTo(0, 300)

            return false;
        }
        return true;
    }

    verifyStartTimeValue() {
        if (this.state.starttimevalue.trim() === '') {            
            alert("All events require a start time");
            document.getElementById("starttimevalue").select();
            return false;
        }
        return true;
    }

    verifyEndTime() {
        if (this.state.endtimevalue.trim() === '') {
            alert("All events require a end time");
            document.getElementById("endtimevalue").select();
            return false;
        }
        return true;
    }

    convertDates() {
        let dt = new Date(this.state.startDate);
        let sDate = dt.getFullYear() + "-" +  (dt.getMonth() + 1) + "-" + dt.getDate();
        let sTime = sDate.concat("-").concat(this.state.starttimevalue).concat(":00");
        let eTime = sDate.concat("-").concat(this.state.endtimevalue).concat(":00");
        // setState takes a callback here this ensures the state is correct for the submission
        this.setState({ starttime: sTime, endtime: eTime }, this.createEvent);
    }


    formatDate(date) {
        const dt = new Date(date);
        let theDate = new Date((dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear());
        this.setState({startDate: theDate})
        this.setState({ date: theDate })
    }


    formatTime(time) {
        let timeVar = time.split("T");
        let hour = timeVar[1].slice(0, 2);
        let mins = timeVar[1].slice(3, 5);
        let fmTime = hour + ":" + mins;
        return fmTime;
    }

    componentDidMount() {

        // Sets the location to autofill with Map listings
        this.locationFinder = new google.maps.places.Autocomplete(this.locationFinderNode);
        this.locationFinder.addListener('place_changed', this.setNewLocation)

        if (this.state.location !== '') {
            this.state.address = this.state.location;
        }

        if (this.props.event.starttime === "") {
            const newDt = new Date();
            this.formatDate(newDt);
            this.eventname.focus();
        } else {
            this.formatDate(this.props.event.starttime);
            let st = this.formatTime(this.props.event.starttime);
            this.setState({ starttimevalue: st})
            let et = this.formatTime(this.props.event.endtime);
            this.setState({ endtimevalue: et })
        }
    }



    
    setNewLocation() {
        const place = this.locationFinder.getPlace()
        this.setState({
            location: place.formatted_address, 
            address: place.formatted_address,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        })
    }

    render() {
        let bannerText = "Create an Event";
        let name = <input className="event-create-container-input" type="text" autoComplete="off" name="eventname" id="eventname" ref={(input) => { this.eventname = input; }} onChange={this.update('eventname')} value={this.state.eventname} />;

        if (this.props.formType === "UpdateEvent") {
            bannerText = "Update the Event";
        }

        return (
        <>
        <NavbarContainer navType={"groups_create"} myType={""} />
        <div className="event-create-banner">
            <span className="event-create-text">{bannerText}</span>
        </div>

        <div className="event-create-container">
            <form onSubmit={this.handleSubmit}>
                <div className="event-inner-form-container">

                    {/* Event Name Section */}
                    <div className="event-inner-item-container" >
                        <label htmlFor="eventname">Event Name:</label>
                        {name}
                    </div>

                    {/* Event Description Section */}
                    <div className="event-inner-item-container" >
                        <label htmlFor="description">Description:</label>
                                <textarea type="text" autoComplete="off" name="description" id="description" onChange={this.update('description')} value={this.state.description}/>
                    </div>

                    {/* Event Location Section (Map API - Google Maps) */}
                    <div className="event-inner-item-container">
                        <label htmlFor="location">Location:</label>
                                <input className="event-create-container-input" type="text" autoComplete="off" name="location" id="location" value={this.state.location} onFocus={() => this.selectAll()} onChange={this.update('location')} ref={locationFinderNode => this.locationFinderNode = locationFinderNode} onBlur={() => this.setLocation('location')}/>
                    </div>

                    <div className="spacer"> </div>

                    {/* Event Date Section (Calendar API - AirBnB) */}
                    <div className="event-inner-item-container-calendar" >
                        <div className="event-calendar-label">
                        <   label htmlFor="eventname">Event Date:</label>
                        </div>
                        <div className="event-calendar">
                            <SingleDatePicker
                                id="eventdate"
                                date={moment(this.state.date)}
                                // date={this.state.date} // momentPropTypes.momentObj or null
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                onDateChange={(date) => this.setState({ date: date, startDate: date })}
                            />
                        </div>
                    </div>

                    <div className="spacer"> </div>
                    <div className="spacer"> </div>

                    <div className="event-inner-item-container-calendar">
                        <div className="event-calendar-label">
                            <label htmlFor="starttimevalue">Start Time:</label>
                        </div>
                        <div className="event-calendar" >
                            <input id="starttimevalue" type="time" onChange={this.update('starttimevalue')} defaultValue={this.state.starttimevalue}/>
                        </div>
                    </div>

                    <div className="spacer"> </div>
                    <div className="spacer"> </div>

                    <div className="event-inner-item-container-calendar">
                        <div className="event-calendar-label">
                            <label htmlFor="endtimevalue">End Time:</label>
                        </div>
                        <div className="event-calendar" >
                            <input id="endtimevalue" type="time" onChange={this.update('endtimevalue')} defaultValue={this.state.endtimevalue}/>
                        </div>
                    </div>

                    <div className="event-inner-item-container-btn">
                        <input className="event-create-submit" type="submit" value="Submit" />
                    </div>

                </div>
            </form>
        </div>

        <FooterContainer myType={"groups"} />
        </>
        )
    }

}

// export default EventsCreate;
export default withRouter(EventsCreate);