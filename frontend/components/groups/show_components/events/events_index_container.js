import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { fetchEvents } from '../../../../actions/event_actions';

const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {
    let currentUser = users[session.id];
    // let groupId = ownProps.match.params.groupId;
    const allEvents = events ? Object.values(events) : []

    // let isEvent = currentUser.groupIds.includes(groupId)

    return ({
        allEvents: allEvents,
        currentUser: currentUser
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        // fetchGroup: (id) => dispatch(fetchGroup(id)),
        fetchEvents: () => dispatch(fetchEvents())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
