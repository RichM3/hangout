import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import GroupsItemIndex from "./groups_index_item";


class GroupsIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.group;
        // this.state.leaderId = this.props.group.currentUser.id;
    }

    componentDidMount() {
        this.props.fetchGroups();
    }

    render() {

        let groups = this.props.groups.map( group => {
            return (
                <GroupsItemIndex group={group} key={group.id} />
            );
        })

        return (
            
        <>
        <NavbarContainer navType={"groups_index"} myType={"login"} />
        <div className="index-body">
            <div className="c-page-lt">
                <div className="member-home-bounds"><label htmlFor="">MEMBER HOME BOUNDS</label></div>
                <form action="" className="searchForm">Search Form</form>
            </div>
            <div className="c-page-body">
                <div className="unit-size5of7-full-width"  >
                    <ul>First UL of User groups</ul>
                    <h2>H2 seperating uls</h2>
                    <ul>2nd UL of Suggested groups</ul>
                    <div>Motivation Cards</div>
                    <ul>Second half of suggested groups</ul>
                    <button>More Button looks like divider with "More" as text</button>
                </div>
                {/* <div className="unit-size5of7-full-width"  >
                    ul-your-meetups     (your meetups)
                    H2 between uls
                    ul-search-results-other-meetups (suggested)
                    div -- motivation cards
                    ul-search-results-other-meetups (suggested)
                    button-more
                </div> */}
            </div>
        </div>
        <FooterContainer footType={"groups"} />



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



        {/* <input className="group-input" type="text" name="groups[groupname]" id="groupname" value={this.state.groupname} /> */}


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

