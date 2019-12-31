import {connect} from 'react-redux';
import EventsShow from '../../../groups/show_components/events/events_show';
import {deleteEvent} from '../../../../actions/event_actions';
import {fetchGroups} from '../../../../actions/group_actions';
import {fetchAllRsvps, createRsvp, updateRsvp } from '../../../../actions/rsvp_actions';

const msp = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];

    let group = {};
    let event = {};
    let rsvps = Object.values(state.entities.rsvps);
    let thisRsvp = {};

    if (typeof (ownProps.location.eventProps) !== "undefined") {
        // Link from calendar home - clicking directly in the event component
        event = ownProps.location.eventProps.event;
        group = state.entities.groups[ownProps.location.eventProps.event.group_id];

        thisRsvp = ownProps.location.eventProps.event.rsvpIds.find((rsvp) => {
            return rsvp.event_id === event.id && rsvp.user_id === currentUser.id
        })
    } else if (ownProps.match.params.eventId !== "undefined") {
        // Edit an event condition
        let eventId = parseInt(ownProps.match.params.eventId);
        event = state.entities.events[eventId];
        group = state.entities.groups[event.group_id];
        thisRsvp = rsvps.find((rsvp) => {
            return rsvp.event_id === event.id && rsvp.user_id === currentUser.id
        })
    } else {
        // When a new event is created, it grans the last item from the state - the most recently created event
        let last = Object.keys(state.entities.events);
        event = state.entities.events[last[last.length - 1]];
        group = state.entities.groups[event.group_id];
        thisRsvp = rsvps.find((rsvp) => {
            return rsvp.event_id === event.id && rsvp.user_id === currentUser.id
        })
    }

    // isMember logic here
    let allGroups = Object.values(state.entities.groups);
    let inGroups = allGroups.filter((group) => {
        return (currentUser.groupIds.includes(group.id))
    })


    let isMember = false;
    if (inGroups.includes(group)) {
        isMember = true;
    }

    return ({
        currentUser: currentUser,
        event: event,
        group: group,
        rsvp: thisRsvp,
        isMember
    })
}

const mdp = (dispatch) => {
    return ({
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
        fetchAllRsvps: (eventId) => dispatch(fetchAllRsvps(eventId)),
        createRsvp: (rsvp) => dispatch(createRsvp(rsvp)),
        updateRsvp: (rsvp) => dispatch(updateRsvp(rsvp)),
        fetchGroups: () => dispatch(fetchGroups())
    })
}

export default connect(msp, mdp)(EventsShow);
