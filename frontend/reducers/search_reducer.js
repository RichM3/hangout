import { SEARCH_RESULTS } from "../actions/search_actions";

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case SEARCH_RESULTS:
            return action.payload;
        default:
            return oldState;
    }
}

export default searchReducer;