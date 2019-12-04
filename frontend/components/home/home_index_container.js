import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { fetchGroups } from '../../actions/group_actions';
import { fetchUserInfo } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users, groups } }, ownProps) => {
    // debugger
    let allGroups = Object.values(groups);
    let currentUser = users[session.id];
    let myType = ownProps.myType;

    // if (currentUser) {

        let inGroups = allGroups.filter((group) => {
            if (!currentUser) {
                return [];
            } else {
                return (currentUser.groupIds.includes(group.id))
            }
        })

        let suggestedGroups = allGroups.filter((group) => {
            if (!currentUser) {
                return [];
            } else {
                return (!currentUser.groupIds.includes(group.id))
            }
        })
    // } else {
    //     inGroups = null;
    //     suggestedGroups = null;
    //     currentUser = null;
    //     myType = null;
    // }

    return ({
        inGroups: inGroups,
        suggestedGroups: suggestedGroups,
        currentUser: currentUser,
        myType
    })
};

const mapDispatchToProps = dispatch => ({
    fetchGroups: () => dispatch(fetchGroups()),
    fetchUserInfo: () => dispatch(fetchUserInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
