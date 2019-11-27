import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


class Calendartest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startdate: '',
            enddate: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    verifyDate() {
        if (typeof (this.state.date) === "undefined") {
            alert("All events require a date ");
            document.getElementById("event_date").focus();
            return false;
        }
        // debugger
        // this.setState({ startdate: moment(this.state.date).format("YYYY/MM/DD") });
        // debugger
        return true;
    }


    verifyTime() {
        // debugger
        if (typeof (this.state.time) === "undefined") {
        // if (this.state.time === '') {
            alert("All events require a start time");
            document.getElementById("event_time").focus();
            return false;
        }
        return true;
    }

    errorcheck() {
        if (this.verifyDate() && this.verifyTime() ) {
            return true;
        } else {
            return false
        }
    }


    convertDate() {
        let d = this.state.startdate.format("YYYY/MM/DD");
        let dt = d.concat(this.state.time);
        alert(dt);
    }


    handleSubmit(e) {
        e.preventDefault()

        this.convertDate();

        // debugger
        // if (this.errorcheck()) {
        //     alert(this.state.startdate);
        //     // alert("Success");
        // }
        // debugger

        // debugger
        // this.props.createEvent(this.state)
        //     .then(() => this.props.history.push(`/groups/${this.state.groupId}`));
    }

    render() {
        return(
        <>
        <NavbarContainer navType={"groups_create"} myType={""} />

        <div className="calendar-container">
            <div>Test</div>

            <SingleDatePicker
                id="event_date"
                date={this.state.date} // momentPropTypes.momentObj or null
                // onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired

                // date={this.state.startdate}
                // onDateChange={(date) => this.setState({ startdate: date })}
                // onDateChange={(date) => this.setState({ date: date, startdate: date }).then((date) => this.setState({ startdate: date }))}
                onDateChange={(date) => this.setState({ date: date, startdate: date })}

            />

            <div className="event-inner-item-container-btn">
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="time" onChange={this.handleInputChange("start_time")} value={this.state.start_time} /> */}
                    <input id="event_time" type="time" onChange={this.update('time')} />
                    <input className="event-create-submit" type="submit" value="Submit" />
                </form>
            </div>

        </div>

        <FooterContainer myType={"groups"} />

        </>
        )
    }

}

export default Calendartest;
