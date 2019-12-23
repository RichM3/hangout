import React from 'react';
import {connect} from 'react-redux';
import EventsForm from './events_form';
import {updateEvent, fetchEvent} from '../../../../actions/event_actions';

const msp = (state, ownProps) => {
    debugger
    // let history = ownProps.history;
    let eventId = parseInt(ownProps.match.params.eventId);
    let event = state.entities.events[eventId];
    return ({
        event: event,
        // history,
        // group: group,
        formType: "UpdateEvent"
    })
}

const mdp = (dispatch) => {
    return ({
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
        action: (event) => dispatch(updateEvent(event))
    })
}

class EventsEditForm extends React.Component {
    
    componentDidMount() {
        let eventId = parseInt(this.props.match.params.eventId);
        this.props.fetchEvent(eventId);
    }

    render() {
        const {action, formType, event} = this.props;
        return (
            <EventsForm
                action={action}
                formType={formType}
                event={event} />
        );
    }
}

export default connect(msp, mdp)(EventsEditForm);
