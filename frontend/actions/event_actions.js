import * as EventsApiUtil from '../util/events_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const RECEIVE_GROUP_EVENTS = 'RECEIVE_GROUP_EVENTS';
export const REMOVE_EVENT = 'REMOVE_EVENT';

const receiveEvents = function(payload) {
    return {
        type: RECEIVE_EVENTS,
        events: payload.events
    }
};

export const fetchEvents = (date) => (dispatch) => (
    EventsApiUtil.fetchEvents(date).then(payload => dispatch(receiveEvents(payload)))
);

const createNewEvent = function(payload) {
    return {
        type: CREATE_EVENT,
        event: payload
    }
}

export const createEvent = (event) => dispatch => (
    EventsApiUtil.createEvent(event).then(payload => dispatch(createNewEvent(payload)))
);

const receiveGroupEvents = function(payload) {
    return {
        type: RECEIVE_GROUP_EVENTS,
        events: payload.events
    }
}

export const fetchGroupEvents = (groupId) => (dispatch) => (
    EventsApiUtil.fetchGroupEvents(groupId).then(payload => dispatch(receiveGroupEvents(payload)))
);

const removeEvent = function(eventId) {
    return {
        type: REMOVE_EVENT,
        eventId
    }
}

export const deleteEvent = (eventId) => (dispatch) => (
    EventsApiUtil.deleteEvent(eventId).then(eventId => dispatch(removeEvent(eventId)))
)