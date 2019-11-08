import { connect } from 'react-redux';
import EventsIndex from './events_index';

const mapStateToProps = (state, ownProps) => {
    // let groupId = ownProps.match.params.groupId;
    // let currentUser = state.entities.users[state.session.id];

    return ({
        // group: state.entities.groups[groupId],
        // currentUser: currentUser
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        // fetchGroup: (id) => dispatch(fetchGroup(id)),
        // createMembership: (groupId) => dispatch(createMembership(groupId)),
        // deleteMembership: (groupId) => dispatch(deleteMembership(groupId)),
        // deleteGroup: (groupId) => dispatch(deleteGroup(groupId))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
