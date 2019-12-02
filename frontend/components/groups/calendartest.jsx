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
        super(props);
        this.state = {
            thedate: new Date(),
        }
        this.onChange = this.onChange.bind(this);
    }

    myAlert() {
        // let test = new Date('December 17, 1995 03:24:00');
        // this.setState({ date: test});
        alert(this.state.thedate);
    }

    // setNewDate(date) {
    //     this.setState({ date: date })
    //     // this.props.setNewDate(date)
    // }

    onClickDay() {
        debugger
        // return e => this.setState({
        //     date: e.target.value
        // });

        this.setState({ thedate: event.target.dataset.day })
    }

    changeSelectedDate(event) {
        debugger
        const day = event.target.dataset.day
        const selectedDate = moment(day, 'YYYY-MM-DD').toDate()
        this.props.changeSelectedDate(selectedDate)
    }

    onChange() {
        debugger
        return e => this.setState({
            date: e.target.value
        });
        // this.setState({ date: event.target.dataset.day })
    }


    render() {
        return(
        <>
        <NavbarContainer navType={"groups_create"} myType={""} />


        <Calendar
            // onChange={() => this.onChange()}
            onClickDay={() => this.onClickDay()}
            value={this.state.thedate}
            // onChange={() => this.onChange()}
            // onChange={() => this.myAlert(this.state.date)}
            // onChange={() => this.setNewDate(this.state.date)}
            // onChange={() => this.myAlert()}
            // value={this.state.date}
        />

        <button className="button--showmore" onClick={() => this.myAlert()} >Press Me</button>

        <FooterContainer myType={"groups"} />

        </>
        )
    }

}

export default Calendartest;
