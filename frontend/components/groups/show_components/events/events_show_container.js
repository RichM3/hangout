import {connect} from 'react-redux';
import EventsShow from '../../../groups/show_components/events/events_show';
import {deleteEvent} from '../../../../actions/event_actions';
import {fetchAllRsvps} from '../../../../actions/rsvp_actions';

const msp = (state, ownProps) => {
    // debugger
    
    // let allGroups = Object.values(groups);
    // let currentUser = users[session.id];

    // let inGroups = allGroups.filter((group) => {
    //     return (currentUser.groupIds.includes(group.id))
    // })

    // let suggestedGroups = allGroups.filter((group) => {
    //     return (!currentUser.groupIds.includes(group.id))
    // })


    let currentUser = state.entities.users[state.session.id];

    let group = {};
    let event = {};
    let rsvps = Object.values(state.entities.rsvps);
    let thisRsvp = {};
    // let rsvps = state.entities.rsvps ? Object.values(state.entities.rsvps) : [];
    // debugger

    // let thisRsvp = rsvps.filter((rsvp) => {
    //     return (currentUser.rsvpIds.includes(rsvp.id))
    // })

    // let thisRsvp = rsvps.filter((rsvp) => {
    //     debugger
    //     return (event.rsvps.includes(rsvp.eventId))
    // })
    // debugger

    if (typeof (ownProps.location.eventProps) !== "undefined") {
        // Link from calendar home - clicking directly in the event component
        // debugger
        event = ownProps.location.eventProps.event;
        // debugger
        group = state.entities.groups[ownProps.location.eventProps.event.group_id];
        thisRsvp = rsvps.find((rsvp) => {
            // debugger
            return rsvp.event_id === event.id && rsvp.user_id === currentUser.id
        })
        // thisRsvp = rsvps.filter((rsvp) => {
        //     return rsvp.event_id === event.id && rsvp.user_id === currentUser.id
        // })
    } else if (ownProps.match.params.eventId !== "undefined") {
        // Edit an event condition
        let eventId = parseInt(ownProps.match.params.eventId);
        event = state.entities.events[eventId];
        group = state.entities.groups[event.group_id];
        thisRsvp = rsvps.filter((rsvp) => {
            return rsvp.event_id === event.id && rsvp.user_id === currentUser.id
        })
    } else {
        // When a new event is created, it grans the last item from the state - the most recently created event
        let last = Object.keys(state.entities.events);
        event = state.entities.events[last[last.length - 1]];
        group = state.entities.groups[event.group_id];
        thisRsvp = rsvps.filter((rsvp) => {
            return rsvp.event_id === event.id && rsvp.user_id === currentUser.id
        })
    }
    // debugger
    return ({
        event: event,
        group: group,
        // rsvps: rsvps,
        rsvp: thisRsvp
    })
}

const mdp = (dispatch) => {
    return ({
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
        fetchAllRsvps: (eventId) => dispatch(fetchAllRsvps(eventId))
    })
}

export default connect(msp, mdp)(EventsShow);
