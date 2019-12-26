import * as RsvpsApiUtil from '../util/rsvp_api_util';

export const RECEIVE_RSVP = 'RECEIVE_RSVP';

const receiveRsvp = function (rsvp) {
    return {
        type: RECEIVE_RSVP,
        rsvp
    }
}

export const fetchRsvp = (eventId) => (dispatch) => (
    EventsApiUtil.fetchRsvp(eventId).then(rsvp => dispatch(receiveRsvp(rsvp)))
)
