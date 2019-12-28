import * as RsvpApiUtil from '../util/rsvp_api_util';

export const RECEIVE_ALL_RSVPS = 'RECEIVE_ALL_RSVPS';
export const RECEIVE_RSVP = 'RECEIVE_RSVP';
export const CREATE_RSVP = 'CREATE_RSVP';
export const MODIFY_RSVP = 'MODIFY_RSVP';

const receiveAllRsvps = function (rsvp) {
    return {
        type: RECEIVE_ALL_RSVPS,
        rsvp
    }
}

export const fetchAllRsvps = () => (dispatch) => (
    RsvpApiUtil.fetchAllRsvps().then(rsvp => dispatch(receiveAllRsvps(rsvp)))
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

