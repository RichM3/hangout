import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { fetchGroupEvents } from '../../../../actions/event_actions';

const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {
    // debugger
    let currentUser = users[session.id];
    let groupId = ownProps.groupId;
    const allEvents = events ? Object.values(events) : []

    return ({
        allEvents: allEvents,
        currentUser: currentUser,
        groupId: groupId
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchGroupEvents: (groupId) => dispatch(fetchGroupEvents(groupId))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
