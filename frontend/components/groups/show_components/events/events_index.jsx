import React from 'react';
import EventsItemIndex from "./events_index_item";
import { Link } from 'react-router-dom';


class EventsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // groupId: this.props.match.params.groupId,
            // userId: this.props.currentUser.id
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        // this.props.fetchUserInfo();
        // let groupId = ownProps.match.params.groupId;
        // this.props.fetchGroups();
        this.props.fetchEvents();
    }


    render() {

        let optionButton = "";
        // debugger
        if (this.props.currentUser.username === this.props.leaderName) {
            optionButton = (
                <Link to={`/events/create`} className="create-event-btn" >Create an Event</Link>
            )
        }


        let listEvents = this.props.allEvents.map(event => {
            return (
                <EventsItemIndex event={event} key={event.id} />
            );
        })

        return (
            <>
                <div className="spacer"> </div>
                <div className="spacer"> </div>


                <div className="page-wrapper">
                {optionButton}
                {/* <Link to={`/groups/${this.props.group.id}/edit`} className="delete-button" >Create an Event</Link> */}
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                <h1>Upcoming Events: </h1>
                </div>

                <div className="spacer"> </div>
                <div className="spacer"> </div>


                {/* <div>EVENTS</div> */}
                {/* <div className="page-wrapper">
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    <h1>Upcoming Events: </h1>
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    <div><p>{this.props.desc}</p></div>
                </div> */}

                <ul className="box-ul">
                    {listEvents}
                </ul>
                <div className="related-events"></div>
                <div className="spacer"> </div>

            </>
        )
    }

}

export default EventsIndex;
