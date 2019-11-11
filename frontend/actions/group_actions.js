import * as GroupsApiUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_SINGLE_GROUP = 'RECEIVE_SINGLE_GROUP';
export const UPDATE_GROUP = 'UPDATE_GROUP';
export const CREATE_NEW_GROUP = 'CREATE_NEW_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';
export const SAVE_MEMBERSHIP = 'SAVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';


const receiveGroups = (payload) => ({
    type: RECEIVE_GROUPS,
    groups: payload.groups
});

const receiveSingleGroup = (payload) => {
    return ({
    type: RECEIVE_SINGLE_GROUP,
    group: payload
    // group: payload.group
    })
};

const updateGroup = (payload) => {
    return ({
        type: UPDATE_GROUP,
        group: payload
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

const saveMembership = (payload) => {
    return ({
        type: SAVE_MEMBERSHIP,
        payload: payload
    })
}

const removeMembership = (payload) => {
    return ({
        type: REMOVE_MEMBERSHIP,
        payload: payload
    })
}


export const fetchGroups = () => (dispatch) => (
    GroupsApiUtil.fetchGroups().then(payload => dispatch(receiveGroups(payload)))
);

export const fetchGroup = (id) => (dispatch) => (
    GroupsApiUtil.fetchGroup(id).then(payload => dispatch(receiveSingleGroup(payload)))
);

export const editGroup = (group) => (dispatch) => (
    GroupsApiUtil.editGroup(group).then(payload => dispatch(updateGroup(payload)))
);

export const createGroup = (group) => (dispatch) => (
    GroupsApiUtil.createGroup(group).then(group => dispatch(createNewGroup(group)))
);

export const deleteGroup = (id) => (dispatch) => (
    GroupsApiUtil.deleteCurrGroup(id).then(group => dispatch(removeGroup(group)))
);

export const createMembership = (groupId) => (dispatch) => (
    GroupsApiUtil.createNewMembership(groupId).then(id => dispatch(saveMembership(id)))
);

export const deleteMembership = (groupId) => (dispatch) => (
    GroupsApiUtil.deleteCurrMembership(groupId).then(id => dispatch(removeMembership(id)))
);

