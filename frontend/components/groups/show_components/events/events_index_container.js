import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { fetchGroupEvents } from '../../../../actions/event_actions';

const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {

    const allEvents = events ? Object.values(events) : [];
    const sorted = allEvents.sort((a, b) => (a.starttime > b.starttime) ? 1 : -1);

    let currentUser = users[session.id];
    let groupId = ownProps.groupId;

    return ({
        allEvents: sorted,
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
