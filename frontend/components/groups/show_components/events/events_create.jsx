import React from 'react';
// import { Link } from 'react-router-dom';
import NavbarContainer from '../../../navbar/navbar_container';
import FooterContainer from '../../../footer/footer_container';


class EventsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
        this.props.createEvent(this.state)
            .then(() => this.props.history.push(`/groups/${this.props.match.params.groupId}`));
    }

    render() {

        //Working code here to use later!!!
        const { groupId } = this.props.location.state;
        console.log("ID");
        console.log(groupId);

        return (
        <>
        <NavbarContainer navType={"groups_create"} myType={""} />
        <div className="event-create-banner">
            <span className="event-create-text">Create an Event</span>
        </div>

{/* NEED TO GET THE STUPID GROUPID THROUGHT THE ROUTER!!! */}
    
            <div>
                test:   :
                {groupId}
            </div>

        <div className="event-create-container">
            <form onSubmit={this.handleSubmit}>
                <div className="event-inner-form-container">
                    <div className="event-inner-item-container" >
                        <label htmlFor="groupname">Event Name:</label>
                        <input type="text" autoComplete="off" name="groupname" id="groupname" onChange={this.update('groupname')} />
                    </div>
                    <div className="event-inner-item-container" >
                        <label htmlFor="description">Description:</label>
                        <textarea type="text" autoComplete="off" name="description" id="description" onChange={this.update('description')} />
                    </div>
                    <div className="event-inner-item-container">
                        <label htmlFor="location">Location:</label>
                        <input type="text" autoComplete="off" name="location" id="location" onChange={this.update('location')} />
                    </div>
                    <div className="event-inner-item-container-btn">
                        <input className="event-create-submit" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>

        <FooterContainer myType={"groups"} />
        </>
        )
    }

}

export default EventsCreate;
