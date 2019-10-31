import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';
// import { withRouter, Route, Redirect } from 'react-router-dom';

class GroupsCreate extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props;
        this.state = {
            groupname: '',
            description: '',
            location: '',
            leaderId: this.props.group.leaderId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // debugger
    }

    
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state);
    //     this.props.processForm(user);
    // }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     if (!this.props.currentUser) {
    //         this.props.history.push('/login')
    //     } else {
    //         this.props.createGroup(this.state)
    //             .then(() => this.props.history.push('/meetup'));
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault()
        // debugger
        this.props.createGroup(this.state)
            .then(() => this.props.history.push('/groups'));
    }


    render() {
        return(
            <>
            <NavbarContainer navType={"groups_create"} myType={""} />
            <div className="create-banner">
                <span className="create-text">Create a Group</span>
                {/* {this.state.leaderId } */}
            </div>

            <div className="group-create-container">
                <form onSubmit={this.handleSubmit}>
                <div className="inner-form-container">
                    <div className="inner-item-container" >
                        {/* <label htmlFor="groupname">Group Name:&nbsp;&nbsp; */}
                        <label htmlFor="groupname">Group Name:</label>
                        <input type="text" name="groupname" id="groupname" onChange={this.update('groupname')} />
                    </div>
                    <div className="inner-item-container" >
                        {/* <label htmlFor="description">Description:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                        <label htmlFor="description">Description:</label>
                            <textarea type="text" name="description" id="description" onChange={this.update('description')} />
                    </div>
                    <div className="inner-item-container">
                        {/* <label htmlFor="location">Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" id="location" onChange={this.update('location')} />
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
