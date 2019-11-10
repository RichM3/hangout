import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';
// import { withRouter, Route, Redirect } from 'react-router-dom';

class GroupsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupname: '',
            description: '',
            location: '',
            leaderId: this.props.group.leaderId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createGroup(this.state)
            .then(() => this.props.history.push('/groups'));
    }


    render() {
        return(
            <>
            <NavbarContainer navType={"groups_create"} myType={""} />
            <div className="create-banner">
                <span className="create-text">Create a Group</span>
            </div>

            <div className="group-create-container">
                <form onSubmit={this.handleSubmit}>
                <div className="inner-form-container">
                    <div className="inner-item-container" >
                        <label htmlFor="groupname">Group Name:</label>
                        <input type="text" autoComplete="off" name="groupname" id="groupname" onChange={this.update('groupname')} />
                    </div>
                    <div className="inner-item-container" >
                        <label htmlFor="description">Description:</label>
                        <textarea type="text" autoComplete="off" name="description" id="description" onChange={this.update('description')} />
                    </div>
                    <div className="inner-item-container">
                        <label htmlFor="location">Location:</label>
                        <input type="text" autoComplete="off" name="location" id="location" onChange={this.update('location')} />
                    </div>
                    <div className="inner-item-container-btn">
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
