// import { RECEIVE_EVENTS } from "../actions/event_actions";
import { RECEIVE_EVENTS } from "../actions/event_actions";


const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        // case RECEIVE_SINGLE_GROUP:
        //     return Object.assign({}, oldState, { [action.group.id]: action.group })
        default:
            return oldState;
    }
}

export default eventsReducer;
