import { RECEIVE_EVENTS, RECEIVE_GROUP_EVENTS, CREATE_EVENT } from "../actions/event_actions";


const eventsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_EVENTS:
            if (typeof action.events === "undefined") {
                return {}
            }
            else {
                return action.events;
            }
        case RECEIVE_GROUP_EVENTS:
            // return oldState;
            // debugger
            if (typeof (action.events) === "undefined") {
                return null;
            } else {
                return action.events;
            }
        case CREATE_EVENT:
            return Object.assign({}, oldState, { [action.event.id]: action.event })
        default:
            return oldState;
    }
}

export default eventsReducer;
