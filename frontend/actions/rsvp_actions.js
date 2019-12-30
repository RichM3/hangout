import * as RsvpApiUtil from '../util/rsvp_api_util';

export const RECEIVE_ALL_RSVPS = 'RECEIVE_ALL_RSVPS';
export const RECEIVE_RSVP = 'RECEIVE_RSVP';
export const CREATE_RSVP = 'CREATE_RSVP';
export const MODIFY_RSVP = 'MODIFY_RSVP';

// Passing a payload in here and then passing payload.rsvp gives all the RSVPs in an array 
// and not an extra layer of abstraction of one index with many objects in that one array element
const receiveAllRsvps = function (payload) {
    return {
        type: RECEIVE_ALL_RSVPS,
        rsvps: payload.rsvps
    }
}

export const fetchAllRsvps = () => (dispatch) => (
    RsvpApiUtil.fetchAllRsvps().then(payload => dispatch(receiveAllRsvps(payload)))
)

const receiveRsvp = function (rsvp) {
    return {
        type: RECEIVE_RSVP,
        rsvp
    }
}

export const fetchRsvp = (eventId) => (dispatch) => (
    RsvpApiUtil.fetchRsvp(eventId).then(rsvp => dispatch(receiveRsvp(rsvp)))
)

const createNewRsvp = function (rsvp) {
    return {
        type: CREATE_RSVP,
        rsvp
    }
}

export const createRsvp = () => dispatch => {
    RsvpsApiUtil.createRsvp().then(rsvp => dispatch(createNewRsvp(rsvp)))
}

const modifyRsvp = function (rsvp) {
    return {
        type: MODIFY_RSVP,
        rsvp
    }
}

export const updateRsvp = (rsvp) => dispatch => {
    RsvpsApiUtil.updateRsvp(rsvp).then(rsvp => dispatch(modifyRsvp(rsvp)))
}

