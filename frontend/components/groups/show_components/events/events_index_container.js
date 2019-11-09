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
        // this fetchEvent will require an action creator a thunk action creator and a ApiEventUtil
        //Also need the reducer
        fetchEvents: (groupId) => dispatch(fetchEvents(groupId)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
