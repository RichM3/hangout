import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { fetchEvents } from '../../../../actions/event_actions';

const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {
    // let currentUser = state.entities.users[state.session.id];
    // let groupId = ownProps.match.params.groupId;
    debugger
    const allEvents = events ? Object.values(events) : []
 
    // let allEvents;

    // if (events === 'undefined' || events === null) {
    //     allEvents = {};
    // }
    // else {
    //     allEvents = Object.values(events);
    // }
    
    debugger
    return ({
        allEvents: allEvents
    })
};

const mapDispatchToProps = (dispatch) => {
    debugger
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
