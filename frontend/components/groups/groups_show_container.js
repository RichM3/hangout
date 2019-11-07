import { connect } from 'react-redux';
import GroupsShow from './groups_show';
import { fetchGroup, createMembership, deleteMembership } from '../../actions/group_actions';

const msp = (state, ownProps) => {
    let groupId = ownProps.match.params.groupId;
    let currentUser = state.entities.users[state.session.id];


    // let allGroups = Object.values(groups);
    // let currentUser = users[session.id];

    // let inGroups = allGroups.filter((group) => {
    //     return (currentUser.groupIds.includes(group.id))
    // })

    let isMember = currentUser.groupIds.includes(groupId)


    return({
        group: state.entities.groups[groupId],
        currentUser: currentUser,
        isMember: isMember
    })
}

const mdp = (dispatch) => {
    return({
        fetchGroup: (id) => dispatch(fetchGroup(id)),
        createMembership: (groupId) => dispatch(createMembership(groupId)),
        deleteMembership: (groupId) => dispatch(deleteMembership(groupId))
        // ,
        // deleteGroup: (groupId) => dispatch(deleteGroup(groupId))
    })
}

export default connect(msp, mdp)(GroupsShow);
