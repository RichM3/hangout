import { SEARCH_RESULTS } from "../actions/search_actions";
// import { SEARCH_GROUP_NAMES_INFO, SEARCH_EVENT_NAMES_INFO } from "../actions/search_actions";
// import { SEARCH_GROUP_NAMES_INFO, SEARCH_EVENT_NAMES_INFO } from "../actions/group_actions";

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case SEARCH_RESULTS:
            // debugger
            // return Object.assign({}, oldState, { [action.search]: action.search });
            return action.payload;
        // case SEARCH_GROUP_NAMES_INFO:
        //     debugger
        //     // return Object.assign({}, oldState, { [action.search]: action.search });
        //     return action.payload;
        // case SEARCH_EVENT_NAMES_INFO:
        //     debugger
        //     return action.eventNames;
        default:
            return oldState;
    }
}

export default searchReducer;