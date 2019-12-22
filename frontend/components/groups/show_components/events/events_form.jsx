import React from 'react';
import NavbarContainer from '../../../navbar/navbar_container';
import FooterContainer from '../../../footer/footer_container';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import moment from 'moment';

class EventsCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.event;
        // this.state = {
        //     eventname: '',
        //     description: '',
        //     location: '',
        //     startDate: '',
        //     starttimevalue: '',
        //     endtimevalue: '',
        //     starttime: '',  //this is for the db insert value - concat time and date
        //     endtime: '',    //this is for the db insert value
        //     groupId: ''
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.convertDates = this.convertDates.bind(this);
        this.createEvent = this.createEvent.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()

        // Error checking needs to use error on page not in alert format
        if (this.errorcheck() ) {
            this.convertDates();
        }
    }

    createEvent(){
        // this.props.createEvent(this.state)
        this.props.action(this.state)
            .then(() => this.props.history.push(`/groups/${this.state.groupId}`));
    }

    errorcheck() {
        if (this.verifyEventName() && this.verifyEventDesc() && this.verifyLocation() && this.verifyDate() && this.verifyStartTimeValue() && this.verifyEndTime() && this.ensureEndGtrStart() ) {
            return true;
        } else {
            return false
        }
    }

    ensureEndGtrStart() {
        if (this.state.starttimevalue >= this.state.endtimevalue) {
            alert("End time is before start time");
            document.getElementById("endtimevalue").focus();
            return false;
        } else {
            return true;
        }
    }
    
    verifyEventName() {
        if (this.state.eventname.trim() === '') {
            document.getElementById("eventname").focus();
            return false;
        }
        return true;
    }

    verifyEventDesc() {
        if (this.state.description.trim() === '') {
            document.getElementById("description").focus();
            return false;
        }
        return true;
    }

    verifyLocation() {
        if (this.state.location.trim() === '') {
            document.getElementById("location").focus();
            return false;
        }
        return true;
    }

    verifyDate() {
        if (typeof (this.state.date) === "undefined") {
            // alert("All events require a date ");
            document.getElementById("eventdate").focus();
            window.scrollTo(0, 300)

            return false;
        }
        return true;
    }

    verifyStartTimeValue() {
        if (this.state.starttimevalue.trim() === '') {            
            // alert("All events require a start time");
            document.getElementById("starttimevalue").focus();
            return false;
        }
        return true;
    }

    verifyEndTime() {
        if (this.state.endtimevalue.trim() === '') {
            // alert("All events require a start time");
            document.getElementById("endtimevalue").focus();
            return false;
        }
        return true;
    }

    convertDates() {
        let sDate = this.state.startDate.format("YYYY/MM/DD");
        let sTime = sDate.concat("-").concat(this.state.starttimevalue).concat(":00");
        let eTime = sDate.concat("-").concat(this.state.endtimevalue).concat(":00");

        // the setState takes a callback here this ensures the state is correct for the submission
        this.setState({ starttime: sTime, endtime: eTime }, this.createEvent);
    }


    formatDate(date) {
        const dt = new Date(date);
        alert("Year:");
        alert(dt.getFullYear());
        alert((dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear());
        let theDate = new Date((dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear());
        alert(theDate);
        this.setState({date: theDate})
    }


    formatTime(time) {
        const dt = new Date(time);
        // const currentTimeZoneOffsetInHours = dt.getTimezoneOffset() / 60;
        // dt.setHours(dt.getHours() + currentTimeZoneOffsetInHours);

        // const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        // const dayName = days[dt.getDay()];

        // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        // const month = months[dt.getMonth()];

        // const day = ('0' + dt.getDate()).slice(-2);
        // const year = dt.getFullYear();
        let hour = dt.getHours();
        const mins = ('0' + dt.getMinutes()).slice(-2);
        // let meridiem;

        hour = ('0' + hour).slice(-2);
        let fmTime = hour + ":" + mins;
        return fmTime;
    }


    componentDidMount() {
        debugger
        this.formatDate(this.props.event.starttime);
        debugger
        // alert(inputDate);
    //     //Set GroupId for state
    //     // const { groupId } = this.props.location.state;

    //     const { groupId } = this.props;
    //     this.setState({ groupId: groupId});
    }

    render() {
        debugger
        let bannerText = "";
        let inputEvent = "";
        let inputDescription = "";
        let inputLocation = "";
        let inputDate = "";
        let inputStartTime = "";
        let inputEndTime = "";

        if (this.props.formType === "UpdateEvent") {
            // alert(this.props.formType);
            bannerText = "Update the Event";
            inputEvent = this.props.event.eventname;
            inputDescription = this.props.event.description;
            inputLocation = this.props.event.location;


            // inputDate = this.formatDate(this.props.event.starttime);


            inputStartTime = this.formatTime(this.props.event.starttime);
            // alert(inputStartTime);

            // inputStartTime = "22:53"

            inputEndTime = this.formatTime(this.props.event.endtime);
        } else {
            bannerText = "Create an Event";
            // inputEvent = "";
        }

        // if (!this.state.groupId) {
        //     return null
        // }

        // if (typeof (this.state.date) === "undefined") {
        //     return null
        // }

        if (this.state === null) {
            return null
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
                        <input className="event-create-container-input" type="text" autoComplete="off" name="eventname" id="eventname" onChange={this.update('eventname')} value={inputEvent} />
                    </div>

                    {/* Event Description Section */}
                    <div className="event-inner-item-container" >
                        <label htmlFor="description">Description:</label>
                                <textarea type="text" autoComplete="off" name="description" id="description" onChange={this.update('description')} value={inputDescription}/>
                    </div>

                    {/* Event Location Section (Map API - Google Maps)  */}
                    <div className="event-inner-item-container">
                        <label htmlFor="location">Location:</label>
                                <input className="event-create-container-input" type="text" autoComplete="off" name="location" id="location" onChange={this.update('location')} value={inputLocation}/>
                    </div>

                    <div className="spacer"> </div>

                    {/* Event Date Section (Calendar API - AirBnB) */}
                    <div className="event-inner-item-container-calendar" >
                        <div className="event-calendar-label">
                        <   label htmlFor="eventname">Event Date:</label>
                        </div>
                        {/* <div id="test" className="event-calendar" onFocus={window.scrollTo(0, 300)} > */}
                        <div className="event-calendar">
                            <SingleDatePicker
                                id="eventdate"
                                date={new Date(this.state.date)}
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
                            <input id="starttimevalue" type="time" onChange={this.update('starttimevalue')} value={inputStartTime}/>
                        </div>
                    </div>

                            <div className="spacer"> </div>
                            <div className="spacer"> </div>

                    <div className="event-inner-item-container-calendar">
                        <div className="event-calendar-label">
                            <label htmlFor="endtimevalue">End Time:</label>
                        </div>
                        <div className="event-calendar" >
                            <input id="endtimevalue" type="time" onChange={this.update('endtimevalue')} value={inputEndTime}/>
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

export default EventsCreate;
