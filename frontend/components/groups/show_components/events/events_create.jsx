import React from 'react';
import NavbarContainer from '../../../navbar/navbar_container';
import FooterContainer from '../../../footer/footer_container';


import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


class EventsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventname: '',
            description: '',
            location: '',
            starttime: '',
            endtime: '',
            groupId: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createEvent(this.state)
            .then(() => this.props.history.push(`/groups/${this.state.groupId}`));
    }


    componentDidMount() {
        //Set GroupId for state
        const { groupId } = this.props.location.state;
        this.setState({ groupId: groupId});
    }

    render() {

        if (!this.state.groupId) {
            return null
        }

        return (
        <>
        <NavbarContainer navType={"groups_create"} myType={""} />
        <div className="event-create-banner">
            <span className="event-create-text">Create an Event</span>
        </div>

        <div className="event-create-container">
            <form onSubmit={this.handleSubmit}>
                <div className="event-inner-form-container">
                    <div className="event-inner-item-container" >
                        <label htmlFor="eventname">Event Name:</label>
                        <input className="event-create-container-input" type="text" autoComplete="off" name="eventname" id="eventname" onChange={this.update('eventname')} />
                    </div>

                    <div className="event-inner-item-container" >
                        <label htmlFor="description">Description:</label>
                        <textarea type="text" autoComplete="off" name="description" id="description" onChange={this.update('description')} />
                    </div>

                    <div className="event-inner-item-container-calendar" >
                        <div className="event-calendar-label">
                        <label htmlFor="eventname">Event Date:</label>
                        </div>
                        <div className="event-calendar" >
                        <SingleDatePicker
                            date={this.state.date} // momentPropTypes.momentObj or null
                            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                            focused={this.state.focused} // PropTypes.bool
                            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        />
                        </div>
                    </div>


                    <div className="event-inner-item-container">
                        <label htmlFor="location">Location:</label>
                        <input className="event-create-container-input" type="text" autoComplete="off" name="location" id="location" onChange={this.update('location')} />
                    </div>
                    {/* <div className="event-inner-item-container">
                        <label htmlFor="starttime">Start Time:</label>
                        <input className="event-create-container-input" type="text" autoComplete="off" name="starttime" id="starttime" onChange={this.update('starttime')} />
                    </div>
                    <div className="event-inner-item-container">
                        <label htmlFor="endtime">End Time:</label>
                        <input className="event-create-container-input" type="text" autoComplete="off" name="endtime" id="endtime" onChange={this.update('endtime')} />
                    </div> */}


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
