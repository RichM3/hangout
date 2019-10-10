import { RECEIVE_GROUPS, RECEIVE_SINGLE_GROUP } from "../actions/group_actions";


const groupsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_GROUPS: 
            return action.groups;
        case RECEIVE_SINGLE_GROUP:
            // debugger
            return Object.assign({}, oldState, {[action.group.id]: action.group})
        default:
            return oldState;
    }
}

export default groupsReducer;