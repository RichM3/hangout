import * as GroupsApiUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_SINGLE_GROUP = 'RECEIVE_SINGLE_GROUP';
export const CREATE_NEW_GROUP = 'CREATE_NEW_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';


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

const createNewGroup = (group) => {
    return ({
        type: CREATE_NEW_GROUP,
        group: group
    })
}

const removeGroup = (group) => {
    return ({
        type: REMOVE_GROUP,
        group: group
    })
}


export const fetchGroups = () => (dispatch) => (
    GroupsApiUtil.fetchGroups().then(payload => dispatch(receiveGroups(payload)))
);


export const fetchGroup = (id) => (dispatch) => (
    GroupsApiUtil.fetchGroup(id).then(payload => dispatch(receiveSingleGroup(payload)))
);


export const createGroup = (group) => (dispatch) => (
    GroupsApiUtil.createGroup(group).then(group => dispatch(createNewGroup(group)))
);


export const deleteGroup = (id) => (dispatc) => (
    GroupsApiUtil.deleteGroup(id).then(group => dispatch(removeGroup(group)))
);
