import { connect } from 'react-redux';
import SearchPage from './search_page';

const mapStateToProps = (state, ownProps) => {

    let searchValue = ownProps.location.state.search;

    const searchGroupNames = state.entities.searchResults.groupNames ? Object.values(state.entities.searchResults.groupNames) : [];
    const searchEventNames = state.entities.searchResults.eventNames ? Object.values(state.entities.searchResults.eventNames) : [];

    // const searchGroupDescs = state.entities.searchResults.groupDesc ? Object.values(state.entities.searchResults.groupDescs) : [];
    // const searchEventDescs = state.entities.searchResults.groupDesc ? Object.values(state.entities.searchResults.eventDescs) : [];
    // debugger

    return ({
        searchValue: searchValue,
        searchGroupNames: searchGroupNames,
        searchEventNames: searchEventNames

        // ,
        // searchGroupDescs: searchGroupDescs,
        // searchEventDescs: searchEventDescs
    })
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
