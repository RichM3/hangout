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

    render() {

        return (
            <>
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
