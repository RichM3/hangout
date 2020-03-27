import { connect } from 'react-redux';
import SearchPage from './search_page';

const mapStateToProps = (state, ownProps) => {
    // debugger
    let searchValue = ownProps.location.state.search;

    // debugger
    const searchResults = state.entities.search ? Object.values(state.entities.search) : [];
    // debugger

    return ({
        searchValue: searchValue,
        searchResults: searchResults
    })
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
