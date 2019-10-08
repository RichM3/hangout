import * as GroupsApiUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_SINGLE_GROUP = 'RECEIVE_SINGLE_GROUP';


const receiveGroups = (payload) => ({
    type: RECEIVE_GROUPS,
    groups: payload.groups
});

const receiveSingleGroup = (payload) => {
    // debugger
    return ({
    type: RECEIVE_SINGLE_GROUP,
    group: payload
    // group: payload.group
    })
};



export const fetchGroups = () => (dispatch) => (
    GroupsApiUtil.fetchGroups().then(payload => dispatch(receiveGroups(payload)))
);


export const fetchGroup = (id) => (dispatch) => (
    GroupsApiUtil.fetchGroup(id).then(payload => dispatch(receiveSingleGroup(payload)))
);

