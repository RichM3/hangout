import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { fetchEvents } from '../../../../actions/event_actions';

const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {
    // let currentUser = state.entities.users[state.session.id];
    // let groupId = ownProps.match.params.groupId;
    const allEvents = events ? Object.values(events) : []
     
    return ({
        allEvents: allEvents
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
