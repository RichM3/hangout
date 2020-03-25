import { connect } from 'react-redux';
import SearchPage from './search_page';
// import { fetchEvents } from '../../actions/event_actions';
// import { fetchGroups } from '../../actions/group_actions';
// import { fetchUserInfo } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
// const mapStateToProps = ({ session, entities: { users, groups, events } }, ownProps) => {
    // let allEvents = events ? Object.values(events) : []
    // let sorted = allEvents.sort((a, b) => (a.starttime > b.starttime) ? 1 : -1)
    // debugger
    let searchValue = ownProps.location.state.search;
    // const allEvents = events ? Object.values(events) : [];
    const searchResults = state.entities.search ? Object.values(state.entities.search) : [];
    // debugger


    return ({
        searchValue: searchValue,
        searchResults: searchResults
    })
};

const mapDispatchToProps = dispatch => ({
    // fetchEvents: (date) => dispatch(fetchEvents(date)),
    // fetchGroups: () => dispatch(fetchGroups()),
    // fetchUserInfo: () => dispatch(fetchUserInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
