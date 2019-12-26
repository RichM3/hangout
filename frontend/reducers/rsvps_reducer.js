import {RECEIVE_ALL_RSVPS, RECEIVE_RSVP} from "../actions/rsvp_actions";

const rsvpsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {};
    switch (action.type) {
        case RECEIVE_ALL_RSVPS:
            return action.rsvps
        case RECEIVE_RSVP:
            newState = Object.assign({}, oldState, { [action.rsvp.id]: action.rsvp });
            return newState;
        default:
            return oldState;
    }
}

export default rsvpsReducer;




        