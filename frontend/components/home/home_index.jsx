import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import Calendar from '../groups/calendar';
import Groups from '../groups/groups_index_container';
import EventsItemIndex from "../groups/show_components/events/events_index_item";


class HomeIndex extends React.Component {
    constructor(props) {
        super(props);

        const splitHistory = this.props.location.pathname.split("/")
        let calendarSelected;

        if (splitHistory[splitHistory.length - 1] !== "my-groups") {
            calendarSelected = true
            this.props.history.push("/my-calendar")
        } else {
            calendarSelected = false
            this.props.history.push("/my-groups")
        }
        this.state = { 
            search: "",
            calendarSelected: calendarSelected,
            myType: this.props.myType,
            listDataFromChild: new Date(),
            doublePress: false
        }
        this.showCalendar = this.showCalendar.bind(this);
        this.showGroups = this.showGroups.bind(this);
        this.dateCallback = this.dateCallback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    dateCallback(dataFromChild) {
        this.setState({ listDataFromChild: dataFromChild }, () => this.props.fetchEvents(this.state.listDataFromChild));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.calendarSelected !== this.state.calendarSelected) {
            if (this.state.calendarSelected) {
                this.props.history.push("/my-calendar")
            } else {
                this.props.history.push("/my-groups")
            }
        }
    }

    showCalendar(e) {
        e.preventDefault();
        if (this.state.calendarSelected === true ) {
            // This is for the double press of calendar button
            this.setState({ doublePress: !this.state.doublePress});
            this.setState({ listDataFromChild: this.state.listDataFromChild }, () => this.props.fetchEvents(this.state.listDataFromChild));
        } else {
            // This is when user comes from groups >> calendar on top buttons
            this.setState({calendarSelected:true});
            this.setState({ listDataFromChild: new Date() }, () => this.props.fetchEvents(this.state.listDataFromChild));
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.fetchSearchInfo(this.state.search)
            .then(() => this.props.history.push({
                pathname: '/search',
                search: `?query=${this.state.search}`,
                state: { search: this.state.search }
            })
        );
    }

    showGroups(e) {
        e.preventDefault();
        this.setState({ calendarSelected: false })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchUserInfo();
        this.props.fetchGroups();
        this.props.fetchEvents(this.state.listDataFromChild);
    }

    render() {
        let listEvents = this.props.allEvents.map(event => {
            return (
                <div key={event.id} >
                    <EventsItemIndex event={event} key={event.id} />
                </div>
            );
        })

        let noEventText = "";
        if (listEvents.length <= 0) {
            noEventText = <div className="noEventText">There are no events scheduled after the selected date.  Try joining more groups to increase the number of upcoming events</div>;
        }

        const contentComp = this.state.calendarSelected ? (
            <>
            <div className="page-container">
                <div className="page-events">
                    <ul className="box-ul">
                        {noEventText}
                        {listEvents}
                    </ul>
                </div>
                    <div className="page-calendar"><Calendar callbackFromParent={(dataFromChild) => this.dateCallback(dataFromChild)}/></div>                
            </div>
            </>
        ) : (
            <Groups />
        )

        let magnify = window.magnifyURL;
        const submitButton = <img src={magnify} />;
        
        return (
            <>
                <div className="index-body">
                    <NavbarContainer navType={"groups_index"} myType={"login"} />

                    <div className="c-page-lt">
                        <div className="member-home-bounds"><label>Find your next event</label></div>
                        <div className="c-page-body">
                            <div className="find-navbar-wrap">
                                <form onSubmit={this.handleSubmit} className="searchForm">
                                    <label className="search-label">Search</label>
                                    <div className="wrapper-magnify" >
                                        <input className="group-input" type="text" name="search" id="search" defaulvalue="" onChange={this.update('search')} />
                                        <input type="image" src={magnify} className="magnify-icon" alt="Submit" />
                                    </div>
                                </form>
                                <div className="button-div">
                                    <div className={this.state.calendarSelected ? 'deselected-button-option' : 'selected-button-option'}><a href="#" onClick={this.showGroups} >Groups</a></div>
                                    <div className={this.state.calendarSelected ? 'selected-button-option' : 'deselected-button-option'}><a href="#" onClick={this.showCalendar}>Calendar</a></div>
                                </div>
                            </div>
                            
                            {contentComp}

                        </div>
                    </div>
                    <FooterContainer myType={"groups"} />
                </div>
            </>
        );
    }
}

export default HomeIndex;
