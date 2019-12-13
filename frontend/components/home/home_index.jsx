import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import Calendar from '../groups/calendar';
import Groups from '../groups/groups_index_container';

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
            myType: this.props.myType
        }
        this.showCalendar = this.showCalendar.bind(this);
        this.showGroups = this.showGroups.bind(this);
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
        this.setState({calendarSelected:true})
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
    }

    render() {
        const contentComp = this.state.calendarSelected ? (
            <Calendar />
        ) : (
            <Groups />
        )

        let magnify = window.magnifyURL;
        
        return (
            <>
                <div className="index-body">
                    <NavbarContainer navType={"groups_index"} myType={"login"} />

                    <div className="c-page-lt">
                        <div className="member-home-bounds"><label><a href="http://">Find your next event</a></label></div>
                        <div className="c-page-body">
                            <div className="find-navbar-wrap">
                                <form action="" className="searchForm">
                                    <div className="wrapper-magnify" >
                                        <input className="group-input" type="text" name="search" id="search" value="" onChange={this.update('search')} />
                                        <img className="magnify-icon" src={magnify} />
                                    </div>                                    

                                    <label htmlFor=""><div>Within 5 miles of NYC</div></label>

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
