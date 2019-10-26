import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';

class GroupsCreate extends React.Component {
    render() {
        return(
            <>
            <NavbarContainer navType={"groups_create"} myType={""} />
            <FooterContainer myType={"groups"} />
            </>
        )
    }
}

export default GroupsCreate;
