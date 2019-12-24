import {connect} from 'react-redux';
import EventsShow from '../../../groups/show_components/events/events_show';
import {fetchEvent, deleteEvent} from '../../../../actions/event_actions';

const msp = (state, ownProps) => {
    let group = {};
    let event = {};
    if (typeof (ownProps.location.eventProps) !== "undefined") {
        event = ownProps.location.eventProps.event;
        group = state.entities.groups[ownProps.location.eventProps.event.group_id];
    } else if (ownProps.match.params.eventId !== "undefined") {
        let eventId = parseInt(ownProps.match.params.eventId);
        event = state.entities.events[eventId];
        group = state.entities.groups[event.group_id];
    } else {
        let last = Object.keys(state.entities.events);
        event = state.entities.events[last[last.length - 1]];
        group = state.entities.groups[event.group_id];
    }

    return ({
        event: event,
        group: group
    })
}

const mdp = (dispatch) => {
    return ({
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId)) 
    })
}

export default connect(msp, mdp)(EventsShow);
