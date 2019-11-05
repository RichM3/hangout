import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";

class GroupsShow extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        // window.scroll({top: 0, left: 0, behavior: 'smooth' });

        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(groupId);
    }

    render() {

        // debugger

        if (!this.props.group) {
            return null
        }

        let people = window.peopleHangoutURL;
        let map = window.mapMarkerURL;
        let members = window.membersURL;
        let leader = window.groupLeaderURL;


        return(
            <>
            <NavbarContainer navType={"groups_show"} myType={""} />
            {/* <script>window.scroll({top: 0, left: 0, behavior: 'smooth' });</script> */}
            <div className="header-stripe">
                <div className="header-inner" >
                    <div className="header-left">
                        <img src={people} />
                    </div>
                    <div className="header-right">

                        <h2>{this.props.group.groupname}</h2>
                        <div className="spacer"> </div>
                        <div className="spacer"> </div>
                        <div className="spacer"> </div>

                        <div className="group_show_icons_wrapper" >
                            <div className="group_show_icons" >
                                <img src={map} />
                            </div>
                            <p>&nbsp;&nbsp;&nbsp;Location: {this.props.group.location}</p>
                        </div>

                            <div className="spacer"> </div>

                        <div className="group_show_icons_wrapper" >
                            <div className="group_show_icons" >
                                <img src={leader} />
                            </div>
                            <p>&nbsp;&nbsp;&nbsp;Organized by: {this.props.group.leaderName }</p>
                            {/* <p>&nbsp;&nbsp;&nbsp;Organized by: {this.props.group.leader_id}</p> */}
                            {/* <p>&nbsp;&nbsp;&nbsp;Organized by: {this.props.currentUser.username}</p> */}
                            {/* <p>&nbsp;&nbsp;&nbsp;Organized by: {this.props.currentUser.id}</p> */}
                            {/* <p>&nbsp;&nbsp;&nbsp;Organized by: {this.props.group.leader.username}</p> */}
                        </div>

                    </div>
                </div>
            </div>
            <div className="menu-stripe">
                <div className="menu-div">
                    <div className="menu-selected">
                        About
                    </div>
                    <div className="menu-choices">
                        Events
                    </div>
                    <div className="menu-choices">
                        Members
                    </div>
                    <div className="menu-choices">
                        Photos
                    </div>
                    <div className="menu-choices">
                        Discussions
                    </div>
                    <div className="menu-choices">
                        More
                    </div>
                    <div>
                        <Link to="/groups" className="join-button" >Join this group</Link>
                    </div>
                    {/* <div className="join-button" >
                        <Link to="/groups" className="delete-button" >Join this group</Link>
                        Join this group
                    </div> */}
                    <div className="grp-btn-spacer"></div>
                    <div>
                        <Link to="/groups" className="delete-button" >Delete this group</Link>
                    </div>
                        {/* <div className="report-button" >
                            ...
                        </div> */}
                        {/* <div className="delete-buttonXXX"> */}
                            {/* <Link to="/groups" className="delete-button" >Delete this group</Link> */}
                            {/* <a href="" className="delete-buttonXXX"></a> */}
                        {/* </div> */}
                </div>
            </div>
            <div className="page-wrapper">
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                <h1>What we are about: </h1>
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                <p>{this.props.group.description}</p>
            </div>
            <div className="related-events"></div>
            <FooterContainer myType={"groups"} />
            </>
        )
    }
}

export default GroupsShow;
