import { connect } from 'react-redux';
import GroupsIndex from './groups_index';
import { fetchGroups } from '../../actions/group_actions';

const mapStateToProps = ({ session, entities: { users, groups } }, ownProps) => {
    let inGroups = Object.values(groups);
    let currentUser = users[session.id];

    return ({
        groups: inGroups,
        currentUser: currentUser
    })
};

const mapDispatchToProps = dispatch => ({
    fetchGroups: () => dispatch(fetchGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsIndex);
