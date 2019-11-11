import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';


class GroupsEdit extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.group;

        this.state = {
            id: this.props.group.id,
            groupname: this.props.group.groupname,
            description: this.props.group.description,
            location: this.props.group.location,
            leader_id: this.props.group.leader.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(parseInt(groupId));
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.editGroup(this.state)
            .then(() => this.props.history.push('/groups'));
    }


    render() {

        if (!this.props.group) {
            return null
        }

        return (
            <>
                <NavbarContainer navType={"groups_create"} myType={""} />
                <div className="create-banner">
                    <span className="create-text">Edit a Group</span>
                </div>

                <div className="group-create-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="inner-form-container">
                            <div className="inner-item-container" >
                                <label htmlFor="groupname">Group Name:</label>
                                {/* <h2>{this.props.group.groupname}</h2> */}
                                <input type="text" disabled value={this.props.group.groupname} autoComplete="off" name="groupname" id="groupname" onChange={this.update('groupname')} />
                            </div>
                            <div className="inner-item-container" >
                                <label htmlFor="description">Description:</label>
                                <textarea type="text" value={this.state.description }  autoComplete="off" name="description" id="description" onChange={this.update('description')} />
                            </div>
                            <div className="inner-item-container">
                                <label htmlFor="location">Location:</label>
                                <input type="text" value={this.state.location} autoComplete="off" name="location" id="location" onChange={this.update('location')} />
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

export default GroupsEdit;
