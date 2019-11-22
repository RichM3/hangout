import { RECEIVE_GROUPS, RECEIVE_SINGLE_GROUP } from "../actions/group_actions";


const groupsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_GROUPS: 
            return action.groups;
        case RECEIVE_SINGLE_GROUP:
            // return Object.assign({}, state, { [action.groupData.group.id]: action.groupData.group })
            return Object.assign({}, oldState, {[action.payload.group.id]: action.group})
        default:
            return oldState;
    }
}

export default groupsReducer;