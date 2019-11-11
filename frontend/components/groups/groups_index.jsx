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
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount() {
        //In the CDM of index
        window.scrollTo(0, 0)
        // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        this.props.fetchUserInfo();
        this.props.fetchGroups();

    }

    render() {
        //In the Render of index

        let inGroups = this.props.inGroups.map( group => {
            return (
                <GroupsItemIndex group={group} key={group.id} member={group.leader_id}/>
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
                                <div className="left-button-option"><a href="#" >Groups</a></div>
                                <div className="right-button-option"><a href="#">Calendar</a></div>
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

export default GroupsIndex;

