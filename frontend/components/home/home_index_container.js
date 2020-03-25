import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { fetchEvents } from '../../actions/event_actions';
import { fetchGroups, fetchSearchInfo } from '../../actions/group_actions';
import { fetchUserInfo } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {
    let allEvents = events ? Object.values(events) : []
    let sorted = allEvents.sort((a, b) => (a.starttime > b.starttime) ? 1 : -1)

    return ({
        allEvents: sorted
    })
};

const mapDispatchToProps = dispatch => ({
    fetchEvents: (date) => dispatch(fetchEvents(date)),
    fetchGroups: () => dispatch(fetchGroups()),
    fetchUserInfo: () => dispatch(fetchUserInfo()),
    fetchSearchInfo: (search) => dispatch(fetchSearchInfo(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
