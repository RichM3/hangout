import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
import LowerSectionContainer from "./show_components/lower_section/lower_section_container";


class GroupsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupId: this.props.match.params.groupId,
            userId: this.props.currentUser.id,
            lowerComponent: 'About'
        }
        this.deleteGroup = this.deleteGroup.bind(this);
        this.leaveGroup = this.leaveGroup.bind(this);
        this.joinGroup = this.joinGroup.bind(this);
        this.updateComponent = this.updateComponent.bind(this);

        // this.choose = this.choose.bind(this);
    }

    deleteGroup(e) {
        e.preventDefault()
        this.props.deleteGroup(this.state.groupId)
        .then(() => this.props.history.push('/groups'));
    }
    
    leaveGroup(e) {
        e.preventDefault()
        this.props.deleteMembership(this.state.groupId)  
            .then(() => this.props.history.push('/groups'));
    }

    joinGroup(e) {
        e.preventDefault()
        this.props.createMembership(this.state.groupId)
            .then(() => this.props.fetchUserInfo());
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        // window.scroll({top: 0, left: 0, behavior: 'smooth' });

        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(groupId);
    }

    //You should invoke your second function as a callback to setState, as setState happens asynchronously
    updateComponent(e) {
        // myClassName = e.target.innerText;
        this.setState({
            lowerComponent: e.target.innerText
        });
    }

    
    myAlert() {
        window.alert("here i am");
    }

    // choose(str) {
    //     debugger
    //     this.myInput.setAttribute("class", "highlight");
    //     console.log(str);
    //     console.log("testXXXXXX");
    // }

    render() {
        // debugger
        // Needed if the page is returned before the component did mount, gets the value from the url -- on refresh
        if (!this.props.group) {
            return null
        }

        let selectedMenuItem = "menu-selected";
        

        let people = window.peopleHangoutURL;
        let map = window.mapMarkerURL;
        let members = window.membersURL;
        let leader = window.groupLeaderURL;


        ///////////////////////////////////////////////////////////////////////
        // Button options - Leave, Join or Delete only one of 3 options
        ///////////////////////////////////////////////////////////////////////
        let optionButton = "";
        let editButton = "";
        let groupId = this.props.match.params.groupId;
        let inGroups = this.props.currentUser.groupIds.includes(parseInt(groupId));
        
        if (this.props.currentUser.username === this.props.group.leaderName) {
            optionButton = (
                <form onSubmit={this.deleteGroup}>
                    <input type="submit" value="Delete this group" className="delete-button" />
                </form>
            );
            editButton = (
                <Link to={`/groups/${this.props.group.id}/edit`} className="delete-button" >Edit this group</Link>
            )
        }
        else if (inGroups) {
            optionButton = (
                <form onSubmit={this.leaveGroup}>
                    <input type="submit" value="Leave this group" className="delete-button" />
                </form>
            );
        } else {
            optionButton = (
                <form onSubmit={this.joinGroup}>
                    <input type="submit" value="Join this group" className="delete-button" />
                </form>
            );
        }


        // let elem = document.getElementById('About');
        // console.log(elem);

        // console.log(document.getElementById("About"));
        // console.log(Element.innerText);
        // console.log("TEST");


        return(
            <>
            <NavbarContainer navType={"groups_show"} myType={""} />

                {/* <button onClick={(e) => this.choose(e.target.innerHTML)}>Apple</button> */}


            <div className="header-stripe">
                <div className="header-inner" >
                    <div className="header-left">
                        <img src={people} />
                    </div>
                    <div className="header-right">

                        <h2>{this.props.group.groupname}</h2>
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
                        </div>

                        <div className="spacer"> </div>

                        { optionButton }
                        { editButton }
                    </div>
                </div>
            </div>


            {/* Menu stripe begins here */}


            <div className="menu-stripe">
                <div className="menu-div">
{/*                         
                    <div id="About" className={this.state.lowerComponent === document.getElementById("About").innerText ? "menu-selected" : "menu-choices"} onClick={this.updateComponent}>
                        <p>About</p>
                    </div> */}
                    {/* <div className="menu-selected" onClick={this.updateComponent}>
                        <p className="fakeLink" >About</p>
                    </div> */}
                    <div className="menu-choices" onClick={this.updateComponent}>
                            <p className={this.state.lowerComponent === "About" ? "menu-selected" : "fakeLink"} >About</p>
                    </div>
                    <div className="menu-choices" onClick={this.updateComponent} >
                        <p className="fakeLink" >Events</p>
                    </div>
                    <div className="menu-choices" onClick={this.updateComponent} >
                        <p className="fakeLink" >Members</p>
                    </div>
                    <div className="menu-choices" onClick={this.updateComponent} >
                        <p className="fakeLink" >Photos</p>
                    </div>
                    <div className="menu-choices" onClick={this.updateComponent} >
                        <p className="fakeLink" >Discussions</p>
                    </div>
                    <div className="menu-choices" onClick={this.updateComponent} >
                        <p className="fakeLink" >More</p>
                    </div>
                </div>
            </div>

            <LowerSectionContainer type={this.state.lowerComponent} desc={this.props.group.description} leaderName={this.props.group.leaderName} />

            <FooterContainer myType={"groups"} />
            </>
        )
    }

}

export default GroupsShow;
