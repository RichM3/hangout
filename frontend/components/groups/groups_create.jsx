import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';

class GroupsCreate extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props;
        this.state = {
            name: '',
            description: '',
            location_id: '',
            organizer_id: this.props.group.organizer_id
        }
        // debugger
    }

    
    


    render() {
        return(
            <>
            <NavbarContainer navType={"groups_create"} myType={""} />
            <div className="create-banner">
                <span className="create-text">Create a Group</span>
                {/* {this.state.organizer_id } */}
            </div>

            <div className="group-create-container">
                <form action="">
                <div className="inner-form-container">
                    <div className="inner-item-container" >
                        {/* <label htmlFor="groupname">Group Name:&nbsp;&nbsp; */}
                        <label htmlFor="groupname">Group Name:</label>
                        <input type="text" name="groupname" id="groupname"/>
                    </div>
                    <div className="inner-item-container" >
                        {/* <label htmlFor="description">Description:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                        <label htmlFor="description">Description:</label>
                        <textarea type="text" name="description" id="description" />
                    </div>
                    <div className="inner-item-container">
                        {/* <label htmlFor="location">Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" id="location" />
                    </div>
                    <div className="inner-item-container-btn">
                        {/* <label htmlFor="">test</label>   */}
                        <input className="create-submit" type="submit" value="Submit" />
                    </div>
                </div>
                </form>
            </div>
            <FooterContainer myType={"groups"} />
            </>
        )
    }
}

export default GroupsCreate;
