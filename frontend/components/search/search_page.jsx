import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import GroupsItemIndex from "../groups/groups_index_item";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        // debugger

        if (!this.props.searchResults) {
            // debugger
            return null;
        }

        let results = this.props.searchResults.map(group => {
            return (
                <GroupsItemIndex group={group} key={group.id} member={group.leader_id} />
            );
        })

        let searchPage;


        if (results.length === 0) {
            searchPage = 
            <>
                    <div className="index-body">
                        <div className="c-page-lt">
                            <div className="search-page-body">
                                <div className="unit-size5of7-full-width" >
                                    <h2 className="my-search-no-results">Your search has returned no results</h2>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        } else {
            searchPage = 
            <>
                <div className="index-body">
                    <div className="c-page-lt">
                        <div className="search-page-body">
                            <div className="unit-size5of7-full-width" >
                                <h2 className="myheader">Search Results</h2>
                                <ul className="box-ul">
                                    {results}
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }

        // debugger
        return (
            <>
                <div className="index-body">
                    <NavbarContainer navType={"groups_index"} myType={"login"} />
                    <div className="member-home-bounds"><label>Search results for input: "{this.props.searchValue}"</label></div>
                    {searchPage}
                    <FooterContainer myType={"groups"} />
                </div>
            </>
        );
    }
}

export default withRouter(SearchPage);
