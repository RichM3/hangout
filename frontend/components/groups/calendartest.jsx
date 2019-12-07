import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';

// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import moment from 'moment';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import Calendar from 'react-calendar';


class Calendartest extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.state = {
            date: new Date(),
        }
        this.onChange = this.onChange.bind(this);
    }

    // myAlert() {
    //     // let test = new Date('December 17, 1995 03:24:00');
    //     // this.setState({ date: test});
    //     alert(this.state.date);
    // }

    // setNewDate(date) {
    //     this.setState({ date: date })
    //     // this.props.setNewDate(date)
    // }

    // onClickDay() {
    //     debugger
    //     // return e => this.setState({
    //     //     date: e.target.value
    //     // });

    //     this.setState({ date: event.target.dataset.day })
    // }

    // changeSelectedDate(event) {
    //     debugger
    //     const day = event.target.dataset.day
    //     const selectedDate = moment(day, 'YYYY-MM-DD').toDate()
    //     this.props.changeSelectedDate(selectedDate)
    // }

    // onChange = (date) => this.setState({ date });

    onChange(date) {
        // debugger
        this.setState({ date }, this.updateRelatedEvents);
        // .then(() => this.updateRelatedEvents());
  
        // this.updateRelatedEvents();
        // return e => this.setState({
        //     date: e.target.value
        // });
    }

    updateRelatedEvents() {
        // Pull Events - to user on page
        alert(this.state.date);
    }

    render() {
        return(
        <>
        {/* <NavbarContainer navType={"groups_create"} myType={""} /> */}

        <Calendar
            onChange={this.onChange}
            value={this.state.date}
            calendarType="US"
            // onClickDay={() => this.onClickDay()}
            // onChange={() => this.onChange()}
            // onChange={() => this.myAlert(this.state.date)}
            // onChange={() => this.setNewDate(this.state.date)}
            // onChange={() => this.myAlert()}
            // value={this.state.date}
        />


        {/* <button className="button--showmore" onClick={() => this.myAlert()} >Press Me</button> */}

        {/* <FooterContainer myType={"groups"} /> */}

        </>
        )
    }

}

export default Calendartest;
