import { connect } from 'react-redux';
import SearchPage from './search_page';

const mapStateToProps = (state, ownProps) => {
    let searchValue = ownProps.location.state.search;
    const searchResults = state.entities.search ? Object.values(state.entities.search) : [];

    return ({
        searchValue: searchValue,
        searchResults: searchResults
    })
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
