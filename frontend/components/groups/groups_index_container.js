import { connect } from 'react-redux';
import GroupsIndex from './groups_index';
import { fetchGroups } from '../../actions/group_actions';
import { fetchUserInfo } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users, groups } }, ownProps) => {
    let allGroups = Object.values(groups);
    let currentUser = users[session.id];

    let inGroups = allGroups.filter((group) => {
        return (currentUser.groupIds.includes(group.id))
    })

    let suggestedGroups = allGroups.filter((group) => {
        return (!currentUser.groupIds.includes(group.id))
    })


    return ({
        inGroups: inGroups,
        suggestedGroups: suggestedGroups,
        currentUser: currentUser
    })
};

const mapDispatchToProps = dispatch => ({
    fetchGroups: () => dispatch(fetchGroups()),
    fetchUserInfo: () => dispatch(fetchUserInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsIndex);
