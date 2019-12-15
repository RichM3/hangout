import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { fetchEvents } from '../../actions/event_actions';
import { fetchGroups } from '../../actions/group_actions';
import { fetchUserInfo } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {
    let allEvents = events ? Object.values(events) : []
    // debugger
    let sorted = allEvents.sort((a, b) => (a.starttime > b.starttime) ? 1 : -1)
    // let sorted = allEvents.sort((a, b) => (a.eventname > b.eventname) ? 1 : -1)

    return ({
        allEvents: sorted
    })
};

const mapDispatchToProps = dispatch => ({
    fetchEvents: (date) => dispatch(fetchEvents(date)),
    fetchGroups: () => dispatch(fetchGroups()),
    fetchUserInfo: () => dispatch(fetchUserInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
