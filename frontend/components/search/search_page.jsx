import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import GroupsItemIndex from "../groups/groups_index_item";
import EventsItemIndex from "../groups/show_components/events/events_index_item";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        // if (!this.props.searchGroupNames) {
        //     return null;
        // }

        let groups = this.props.searchGroupNames.map(group => {
            return (
                <GroupsItemIndex group={group} key={group.id} member={group.leader_id} />
            );
        })

        let events = this.props.searchEventNames.map(event => {
            return (
                <EventsItemIndex event={event} key={event.id} />
            );
        })


        let searchPage;

        if (groups.length === 0) {
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
                                    {groups}
                                    <div className="clearfix"></div>
                                </ul>
                                <div>Test5</div>


                            </div>

                            <div className="spacer"> </div>
                            <div className="spacer"> </div>

                            <div className="searchEventItemStyle">
                                <ul className="box-ul">
                                    {events}
                                </ul>
                            </div>

                            <div>Test4</div>

                        </div>
                        <div>Test3</div>

                    </div>
                    <div>Test2</div>
                </div>

                <div>Test1</div>
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
