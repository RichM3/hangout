import { connect } from 'react-redux';
import GroupsShow from './groups_show';
import { fetchGroup, editGroup, createMembership, deleteMembership, deleteGroup } from '../../actions/group_actions';
import { fetchUserInfo } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    let groupId = ownProps.match.params.groupId;
    let currentUser = state.entities.users[state.session.id];

    return({
        group: state.entities.groups[groupId],
        currentUser: currentUser
    })
}

const mdp = (dispatch) => {
    return({
        fetchGroup: (id) => dispatch(fetchGroup(id)),
        createMembership: (groupId) => dispatch(createMembership(groupId)),
        deleteMembership: (groupId) => dispatch(deleteMembership(groupId)),
        deleteGroup: (groupId) => dispatch(deleteGroup(groupId)),
        fetchUserInfo: () => dispatch(fetchUserInfo())
    })
}

export default connect(msp, mdp)(GroupsShow);
