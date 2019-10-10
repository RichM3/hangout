import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";

class GroupsShow extends React.Component {

    componentDidMount() {
        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(groupId);
    }

    render() {

        // debugger

        if (!this.props.group) {
            return null
        }

        return(
            <>
            <NavbarContainer navType={"groups_show"} myType={""} />
            <div className="header-stripe">
                <div>
                    <Link to="/groups" >Group Index</Link>
                    <h2>{this.props.group.groupname}</h2>
                </div>
            </div>
            <div className="menu-stripe"></div>
            <div className="page-wrapper"></div>
            <div className="related-events"></div>
            <FooterContainer myType={"groups"} />
            </>
        )
    }
}

export default GroupsShow;
