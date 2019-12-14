import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { fetchGroupEvents, fetchEvents} from '../../../../actions/event_actions';

const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {
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
        fetchGroupEvents: (groupId) => dispatch(fetchGroupEvents(groupId)),
        fetchEvents: () => dispatch(fetchEvents())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
