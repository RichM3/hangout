import React from 'react';
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



        
        // const eventDateTime = new Date(this.props.event.starttime.split("T"));
        // const eventDate = new Date(eventDateTime[0]);
        // const eventTime = new Date(eventDateTime[1]);
        // console.log(eventDateTime);

        // let month = eventDateTime.getMonth();
        // console.log(month);

        // console.log("Date: " + eventDate);
        // console.log("Time: " + eventTime);

        // console.log(typeof this.props.event.starttime);

        // if (this.props.event.starttime instanceof Object) {
        //     console.log("Is a date");
        // } else {
        //     console.log("NOT date");
        // }


        // let testDate = Date.parse(this.props.event.starttime);


        // console.log(testDate);
        // console.log(this.props.event.starttime);

        // const eventDate = new Date('July 20, 69 00:20:18');
        // console.log(eventDate);
        // let month = eventDate.getMonth();
        // console.log(month);

        // let month = Date.parse(this.props.event.starttime).getMonth();
        // console.log(month);
        // debugger
        return (
            <>
                <NavbarContainer navType={"groups_create"} myType={""} />
                <div className="event-show-banner">
                    <div className="event-calendar-date-image">
                        <div>{day}</div>
                        <div>{month}</div>
                    </div>
                    <div className="event-details-container">
                        <div className="event-date" >{dayName + ' ' + month + ' ' + day + ' ' + year + ' ' + hour + ':' + mins + ' ' + meridiem}</div>
                        <div>{this.props.event.eventname}</div>
                    </div>
                    <div className="event-attending">Attending</div>

                    {/* <div>{this.props.event.starttime}</div> */}
                    {/* <div>{this.props.event.eventname}</div> */}
                    {/* <div>Details for: {this.props.group.groupname} <p>Event: {this.props.event.eventname}</p></div> */}
                
                
                </div>


                <div className="event-show-body">EVENT BANNER</div>

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