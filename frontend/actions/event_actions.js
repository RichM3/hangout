import * as EventsApiUtil from '../util/events_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
export const RECEIVE_GROUP_EVENTS = 'RECEIVE_GROUP_EVENTS';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const MODIFY_EVENT = 'MODIFY_EVENT';

const receiveEvents = function(payload) {
    return {
        type: RECEIVE_EVENTS,
        events: payload.events
    }
};

export const fetchEvents = (date) => (dispatch) => (
    EventsApiUtil.fetchEvents(date).then(payload => dispatch(receiveEvents(payload)))
);

const receiveEvent = function(event) {
    return {
        type: RECEIVE_EVENT,
        event: event
    }
}

export const fetchEvent = (eventId) => (dispatch) => (
    EventsApiUtil.fetchEvent(eventId).then(event => dispatch(receiveEvent(event)))
)

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

const modifyEvent = function(event) {
    return {
        type: MODIFY_EVENT,
        event
    }
}

export const updateEvent = (event) => (dispatch) => (
    EventsApiUtil.updateEvent(event).then(event => dispatch(modifyEvent(event)))
)
