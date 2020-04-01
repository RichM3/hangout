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

        // debugger
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

        if (groups.length === 0 && events.length === 0) {
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
                                <h2 className="search-header">Groups related to your search results</h2>
                                <div className="spacer"> </div>
                                <div className="spacer"> </div>
                                <ul className="box-ul">
                                    {groups}
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="index-body">
                    <div className="c-page-lt">
                        <div className="search-page-body">
                            <div className="unit-size5of7-full-width" >
                                <h2 className="search-header">Events related to your search results</h2>
                                <div className="spacer"> </div>
                                <div className="spacer"> </div>
                                <ul className="box-ul">
                                    {events}
                                    <div className="clearfix"></div>
                                </ul>
                            </div>

                            {/* <div className="spacer"> </div>
                            <div className="spacer"> </div>

                            <div className="searchEventItemStyle">
                                <ul className="box-ul">
                                    {events}
                                </ul>
                            </div> */}

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
                    <div className="member-home-bounds"><label><p>Search results for input: "{this.props.searchValue}"</p>
                    <p>Groups listed first followed by events</p></label></div>
                    {/* <div className="member-home-bounds"><label>Groups listed first followed by events</label></div> */}
                    {searchPage}
                    <FooterContainer myType={"groups"} />
                </div>
            </>
        );
    }
}

export default withRouter(SearchPage);
