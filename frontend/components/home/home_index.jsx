import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import GroupsItemIndex from "../groups/groups_index_item";
import { Link } from 'react-router-dom';
import Calendar from '../groups/calendartest';
import Groups from '../groups/groups_index';

class HomeIndex extends React.Component {
    constructor(props) {
        super(props);
        // debugger

        const splitHistory = this.props.location.pathname.split("/")
        let calendarSelected;
        // debugger
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
            myType: this.props.myType
        }
        // this.state = { calendarSelected }
        this.toggleSelected = this.toggleSelected.bind(this)


        // let buttonTest = "";
        // this.state = {
        //     search: "",
        //     // type: "calendar",
        //     // calendar: true
        // }
        // this.updateCalendarState = this.updateCalendarState.bind(this);

        this.showCalendar = this.showCalendar.bind(this);
        this.showGroups = this.showGroups.bind(this);
    }

    toggleSelected(selectedCalendar) {
        return e => {
            this.setState({ calendarSelected: selectedCalendar })
        }
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
        // debugger
        e.preventDefault();
        console.log("showCal");
        this.setState({calendarSelected:true})
        // this.props.history.push("/my-calendar")
        // this.myAlert();
        // this.setState({myType: "calendar"});
        // this.props.history.push("/my-calendar");
        // debugger
    }

    showGroups(e) {
        // debugger
        e.preventDefault();

        console.log("showGrps");
        this.setState({ calendarSelected: false })
        // this.props.history.push("/my-groups")
        // this.myAlert();
        // this.setState({ calendar: false }, this.myAlert);
        // this.setState({ myType: "groups" });
        // this.props.history.push("/my-groups");
        // debugger
    }

    // updateCalendarState(e) {
    //     e.preventDefault();
    //     debugger
    //     this.myAlert();
    //     this.setState({calendar: !this.state.calendar}, this.myAlert);
    // }

    myAlert() {
        alert(this.state.calendar);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        this.props.fetchUserInfo();
        this.props.fetchGroups();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     debugger
    //     if (prevState.myType !== this.state.myType) {
    //         // this.props.history.push("/my-calendar");
    //         console.log("if");
    //     } else {
    //         // this.props.history.push("/my-groups");
    //         console.log("Else");
    //     }
    // }

    render() {
        // debugger


        let buttonTest = "";
        // if (this.state.myType === "calendar") {
        if (this.state.calendarSelected) {            
            // debugger
            buttonTest = (
                <button>Calendar</button> )
        } else {
            // debugger
            buttonTest = (
                <button>Groups</button>)
        }

        const contentComp = this.state.calendarSelected ? (
            // console.log("Here")

            <Calendar/>
        ) : (
            <Groups />
            )


        let inGroups = this.props.inGroups.map(group => {
            return (
                <GroupsItemIndex group={group} key={group.id} member={group.leader_id} />
            );
        })

        let suggestedGroups = this.props.suggestedGroups.map(group => {
            return (
                <GroupsItemIndex group={group} key={group.id} />
            );
        })

        let magnify = window.magnifyURL;

        // debugger
        // here here here 
        
        return (
            <>
                {/* {contentComp} */}
                {buttonTest}
                <div className="index-body">
                    <NavbarContainer navType={"groups_index"} myType={"login"} />

                    {/* this is for calendar testing */}
                    <Link to="./groups/calendartest" className="create-event-btn" >Create Calendar </Link>

                    <div className="c-page-lt">
                        <div className="member-home-bounds"><label><a href="http://">Find your next event</a></label></div>
                        <div className="c-page-body">
                            <div className="find-navbar-wrap">
                                <form action="" className="searchForm">
                                    <div className="wrapper-magnify" >
                                        <input className="group-input" type="text" name="search" id="search" value="" onChange={this.update('search')} />
                                        <img className="magnify-icon" src={magnify} />
                                    </div>
                                    {/* <div>Within 5 miles of NYC</div> */}
                                </form>
                                <div className="button-div">
                                    <div className="left-button-option"><a href="#" onClick={this.showGroups} >Groups</a></div>
                                    <div className="right-button-option"><a href="#" onClick={this.showCalendar}>Calendar</a></div>
                                    {/* <button onClick={this.myAlert()}>Test </button> */}
                                    {/* <a href="#" onClick={this.myAlert()} >Groups</a></div> */}
                                </div>
                            </div>
                            {/* DIVIDES THE TOP OF PAGE FROM BOTTOM SEPERATES GROUPS A PERSON BELONGS TO */}
                            <div className="unit-size5of7-full-width" >
                                <h2 className="myheader">YOUR GROUPS</h2>
                                <ul className="box-ul">
                                    {inGroups}
                                    <div className="clearfix"></div>
                                </ul>
                                <h2 className="myheader">SUGGESTED GROUPS</h2>
                                <ul className="box-ul">
                                    {suggestedGroups}
                                </ul>
                                <button className="button--showmore" >Show more</button>
                            </div>
                        </div>
                    </div>
                    <FooterContainer myType={"groups"} />
                </div>
            </>
        );
    }
}

export default HomeIndex;
