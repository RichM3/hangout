import * as EventsApiUtil from '../util/events_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

// const receiveEvents = (payload) => ({
//     type: RECEIVE_EVENTS,
//     events: payload.events
// });

export const fetchEvents = () => (dispatch) => (
    EventsApiUtil.fetchEvents().then(payload => dispatch(receiveEvents(payload)))
);

const receiveEvents = function(payload) {
    debugger
    return {
    type: RECEIVE_EVENTS,
    events: payload.events
    }
};


// export const fetchEvents = () => {
//     debugger
    // return function(dispatch) {
    //     debugger
    //     return 
    //         (EventsApiUtil.fetchEvents().then(payload => dispatch(receiveEvents(payload))))
    //     }
// }
// ;


