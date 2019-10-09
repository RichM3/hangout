import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import GroupsItemIndex from "./groups_index_item";


class GroupsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        // this.state = this.props.group;
        // this.state.leaderId = this.props.group.currentUser.id;
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {

        let inGroups = this.props.inGroups.map( group => {
            return (
                <GroupsItemIndex group={group} key={group.id} />
            );
        })

        let suggestedGroups = this.props.suggestedGroups.map(group => {
            return (
                <GroupsItemIndex group={group} key={group.id} />
            );
        })

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
                            {/* <div>Within 5 miles of NYC</div> */}
                        </form>
                        <div className="button-div">
                                <div className="left-button-option"><a href="http://" >Groups</a></div>
                                <div className="right-button-option"><a href="http://">Calendar</a></div>
                        </div>
                    </div>
{/* DIVIDES THE TOP OF PAGE FROM BOTTOM SEPERATES GROUPS A PERSON BELONGS TO */}
                    <div className="unit-size5of7-full-width" >
                        <h2 className="myheader">YOUR GROUPS</h2>
                        <ul className="box-ul">
                            {inGroups}
                        </ul>
                        <h2 className="myheader">SUGGESTED GROUPS</h2>
                        <ul className="box-ul">
                            {suggestedGroups}
                        </ul>
                        {/* <div className="motivation-section" >Motivation Section</div>
                        <ul>Second half of suggested groups</ul> */}
                        <button className="button--showmore" >Show more</button>
                    </div>
                </div>
            </div>
            <FooterContainer myType={"groups"} />
        </div>


                {/* <div className="unit-size5of7-full-width"  >
                    ul-your-meetups     (your meetups)
                    H2 between uls
                    ul-search-results-other-meetups (suggested)
                    div -- motivation cards
                    ul-search-results-other-meetups (suggested)
                    button-more
                </div> */}



        {/* <div className="showname" >Hi, {this.props.currentUser.username}!</div>

        <div>
        </div>

        <section id="groupInputs">
            <form className="group-form-box">
                <ul>
                {groups}
                </ul>
            </form>
        </section>
 */}





        {/* <div className="showname" >Hi, {this.state.currentUser.username}!</div> */}
        {/* <div className="showname" >Hi, {this.state.currentUser.id}!</div>
        <div className="showname" >Hi, {this.state.leaderId}!</div>
        <div className="showname" >Hi, {this.state.currentUser.email}!</div>

        <div className="showname" >groupname:, {this.state.groupdatahere }!</div>
        <div className="showname" >Pw, {this.state.group.password}!</div> */}


        </>
        );
    }
}

export default GroupsIndex;

