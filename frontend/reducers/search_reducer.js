import { SEARCH_INFO } from "../actions/group_actions";

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case SEARCH_INFO:
            // debugger
            // return Object.assign({}, oldState, { [action.search]: action.search });
            return action.search;
        // case RECEIVE_SINGLE_GROUP:
        //     return Object.assign({}, oldState, { [action.group.id]: action.group })
        default:
            return oldState;
    }
}

export default searchReducer;