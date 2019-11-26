import * as EventsApiUtil from '../util/events_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';

const receiveEvents = function (payload) {
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


