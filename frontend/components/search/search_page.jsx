import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import GroupsItemIndex from "../groups/groups_index_item";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        // const splitHistory = this.props.location.pathname.split("/")
        // let calendarSelected;

        // if (splitHistory[splitHistory.length - 1] !== "my-groups") {
        //     calendarSelected = true
        //     this.props.history.push("/my-calendar")
        // } else {
        //     calendarSelected = false
        //     this.props.history.push("/my-groups")
        // }
        // this.state = {
        //     search: "",
        //     calendarSelected: calendarSelected,
        //     myType: this.props.myType,
        //     listDataFromChild: new Date(),
        //     doublePress: false
        // }
        // this.showCalendar = this.showCalendar.bind(this);
        // this.showGroups = this.showGroups.bind(this);
        // this.dateCallback = this.dateCallback.bind(this);
        // this.searchClick = this.searchClick.bind(this);
    }

    // dateCallback(dataFromChild) {
    //     this.setState({ listDataFromChild: dataFromChild }, () => this.props.fetchEvents(this.state.listDataFromChild));
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.calendarSelected !== this.state.calendarSelected) {
    //         if (this.state.calendarSelected) {
    //             this.props.history.push("/my-calendar")
    //         } else {
    //             this.props.history.push("/my-groups")
    //         }
    //     }
    // }

    // showCalendar(e) {
    //     e.preventDefault();
    //     if (this.state.calendarSelected === true) {
    //         // This is for the double press of calendar button
    //         this.setState({ doublePress: !this.state.doublePress });
    //         this.setState({ listDataFromChild: this.state.listDataFromChild }, () => this.props.fetchEvents(this.state.listDataFromChild));
    //     } else {
    //         // This is when user comes from groups >> calendar on top buttons
    //         this.setState({ calendarSelected: true });
    //         this.setState({ listDataFromChild: new Date() }, () => this.props.fetchEvents(this.state.listDataFromChild));
    //     }
    // }

    // searchClick(e) {
    //     e.preventDefault();

    //     alert(this.state.search);
    //     // this.props.editGroup(formData)
    //     //     .then(() => this.props.history.push(`/groups/${this.props.match.params.groupId}`));
    //     this.props.search(this.state.search)
    //         .then(() => this.props.history.push(`/groups/search`));
    // }

    // showGroups(e) {
    //     e.preventDefault();
    //     this.setState({ calendarSelected: false })
    // }

    // update(field) {
    //     return e => this.setState({
    //         [field]: e.currentTarget.value
    //     });
    // }

    // componentDidMount() {
    //     window.scrollTo(0, 0)
    //     this.props.fetchUserInfo();
    //     this.props.fetchGroups();
    //     this.props.fetchEvents(this.state.listDataFromChild);
    // }

    render() {
        // let listEvents = this.props.allEvents.map(event => {
        //     return (
        //         <div key={event.id} >
        //             <EventsItemIndex event={event} key={event.id} />
        //         </div>
        //     );
        // })

        // let noEventText = "";
        // if (listEvents.length <= 0) {
        //     noEventText = <div className="noEventText">There are no events scheduled after the selected date.  Try joining more groups to increase the number of upcoming events</div>;
        // }

        // const contentComp = this.state.calendarSelected ? (
        //     <>
        //         <div className="page-container">
        //             <div className="page-events">
        //                 <ul className="box-ul">
        //                     {noEventText}
        //                     {listEvents}
        //                 </ul>
        //             </div>
        //             <div className="page-calendar"><Calendar callbackFromParent={(dataFromChild) => this.dateCallback(dataFromChild)} /></div>
        //         </div>
        //     </>
        // ) : (
        //         <Groups />
        //     )

        // let magnify = window.magnifyURL;

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
                    {/* <div>Test</div> */}
                    {/* <div>{this.props.searchValue}</div> */}

                    <FooterContainer myType={"groups"} />
                </div>
            </>
        );
    }
}

export default withRouter(SearchPage);
