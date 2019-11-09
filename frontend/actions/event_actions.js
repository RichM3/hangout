import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

const receiveEvents = (payload) => ({
    type: RECEIVE_EVENTS,
    events: payload.events
});

export const fetchEvents = () => (dispatch) => (
    EventsApiUtil.fetchEvents().then(payload => dispatch(receiveEvents(payload)))
);



