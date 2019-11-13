import React from 'react';
import EventsItemIndex from "./events_index_item";


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
