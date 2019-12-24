import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_GROUP_EVENTS, CREATE_EVENT, REMOVE_EVENT, MODIFY_EVENT } from "../actions/event_actions";


const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {};
    switch (action.type) {
        case RECEIVE_EVENTS:
            if (typeof action.events === "undefined") {
                return {};
            }
            else {
                return action.events;
            }
        case RECEIVE_EVENT:
            newState = Object.assign({}, oldState, {[action.event.id]: action.event});
            return newState;
        case RECEIVE_GROUP_EVENTS:
            if (typeof (action.events) === "undefined") {
                return null;
            } else {
                return action.events;
            }
        case CREATE_EVENT:
            return Object.assign({}, oldState, { [action.event.id]: action.event });
        case REMOVE_EVENT:
            newState = Object.assign({}, oldState);
            delete newState[action.eventId];
            return newState;
        case MODIFY_EVENT:
            return Object.assign({}, oldState, { [action.event.id]: action.event });
        default:
            return oldState;
    }
}

export default eventsReducer;
