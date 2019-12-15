import React from 'react';
import ReactCalendar from 'react-calendar';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(date) {
        this.setState({ date });
        // this.setState({ date }, this.updateRelatedEvents);
        this.props.callbackFromParent(date);
    }

    render() {
        return(
        <>
        <ReactCalendar
            onChange={this.onChange}
            value={this.state.date}
            calendarType="US"
        />
        </>
        )
    }

}

export default Calendar;
