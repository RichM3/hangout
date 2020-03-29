import * as SearchApiUtil from '../util/search_api_util';

export const SEARCH_RESULTS = 'SEARCH_RESULTS';
// export const SEARCH_GROUP_NAMES_INFO = 'SEARCH_GROUP_NAMES_INFO';
// export const SEARCH_EVENT_NAMES_INFO = 'SEARCH_EVENT_NAMES_INFO';

const receiveSearchInfo = function (payload) {

    // let groupNames;
    // debugger
    // if (Object.keys(payload.groupNames).length === 0) {
    //     groupNames = {}
    // } else {
    //     groupNames = payload.groupNames
    // }


    // let eventNames;

    // if (Object.keys(payload.eventNames).length === 0) {
    //     eventNames = {}
    // } else {
    //     eventNames = payload.eventNames
    // }

    // debugger

    return ({
        type: SEARCH_RESULTS,
        payload: payload
    })
};


export const fetchSearchInfo = (searchCriteria) => (dispatch) => (
    SearchApiUtil.fetchSearchInfo(searchCriteria).then(payload => dispatch(receiveSearchInfo(payload)))
);
