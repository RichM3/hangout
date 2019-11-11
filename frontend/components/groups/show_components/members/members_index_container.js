import { connect } from 'react-redux';
import MembersIndex from './members_index';

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
        // this fetchEvent will require an action creator a thunk action creator and a ApiEventUtil
        //Also need the reducer
        // fetchMembers: (groupId) => dispatch(fetchMembers(groupId))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersIndex);
