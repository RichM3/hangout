import { connect } from 'react-redux';
import HomeIndex from './home_index';
import { fetchEvents } from '../../actions/event_actions';
import { fetchGroups } from '../../actions/group_actions';
import { fetchUserInfo } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {
    const allEvents = events ? Object.values(events) : []

    return ({
        allEvents: allEvents
    })
};

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => dispatch(fetchEvents()),
    fetchGroups: () => dispatch(fetchGroups()),
    fetchUserInfo: () => dispatch(fetchUserInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
