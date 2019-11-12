import React from 'react';

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
        // this.props.fetchGroups();
        this.props.fetchEvents();
    }


    render() {
        let listEvents = this.props.allEvents.map(event => {
            return (
                <div>
                    {event.eventname}
                    {/* {event.eventname}
                    {event.eventname}
                    {event.eventname}
                    {event.eventname} */}
                </div>
                // <GroupsItemIndex group={group} key={group.id} member={group.leader_id} />
            );
        })

        return (
            <>
                <ul className="box-ul">
                    {listEvents}
                </ul>


                {/* <div>EVENTS</div> */}
                <div className="page-wrapper">
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    <h1>Upcoming Events: </h1>
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    {/* <div><p>{this.props.desc}</p></div> */}
                </div>
                <div className="related-events"></div>
            </>
        )
    }

}

export default EventsIndex;
