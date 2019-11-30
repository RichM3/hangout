import React from 'react';
import EventsItemIndex from "./events_index_item";
import { Link } from 'react-router-dom';


class EventsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupId: this.props.groupId
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchEvents();
    }

    render() {

        let optionButton = "";
        if (this.props.currentUser.username === this.props.leaderName) {
            optionButton = (
                <Link to={ {
                    pathname: `/events/create/${this.state.groupId}`,
                    // state: {
                    //     groupId: this.state.groupId
                    // }
                } }
                className="create-event-btn" >Create an Event</Link>
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
                <div className="spacer"> </div>
                <div className="spacer"> </div>

                <div className="page-wrapper">
                    <div>
                    {optionButton}
                    </div>

                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>

                    <h1>Upcoming Events: </h1>
                </div>

                <div className="spacer"> </div>
                <div className="spacer"> </div>

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
