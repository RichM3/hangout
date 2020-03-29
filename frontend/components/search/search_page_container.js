import { connect } from 'react-redux';
import SearchPage from './search_page';

const mapStateToProps = (state, ownProps) => {
    // debugger
    let searchValue = ownProps.location.state.search;

    // debugger
    const searchGroupNames = state.entities.searchResults.groupNames ? Object.values(state.entities.searchResults.groupNames) : [];
    const searchEventNames = state.entities.searchResults.eventNames ? Object.values(state.entities.searchResults.eventNames) : [];
    // debugger

    return ({
        searchValue: searchValue,
        searchResults: searchGroupNames
    })
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
