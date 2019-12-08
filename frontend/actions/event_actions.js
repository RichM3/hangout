import * as EventsApiUtil from '../util/events_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const RECEIVE_GROUP_EVENTS = 'RECEIVE_GROUP_EVENTS';

const receiveEvents = function(payload) {
    return {
        type: RECEIVE_EVENTS,
        events: payload.events
    }
};

export const fetchEvents = () => (dispatch) => (
    EventsApiUtil.fetchEvents().then(payload => dispatch(receiveEvents(payload)))
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
    debugger
    return {
        // type: RECEIVE_GROUP_EVENTS,
        type: RECEIVE_EVENTS,
        events: payload.events
    }
}

export const fetchGroupEvents = (groupId) => (dispatch) => (
    EventsApiUtil.fetchGroupEvents(groupId).then(payload => dispatch(receiveGroupEvents(payload)))
);

// export const fetchGroupEvents = function(groupId) {
//     debugger
//     return EventsApiUtil.fetchGroupEvents(groupId).then(payload => dispatch(receiveGroupEvents(payload)))
// };

