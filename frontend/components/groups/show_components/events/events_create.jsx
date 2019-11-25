import React from 'react';
// import { Link } from 'react-router-dom';
import NavbarContainer from '../../../navbar/navbar_container';
import FooterContainer from '../../../footer/footer_container';


class EventsCreate extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            // groupId: this.props.groupId,
            // eventname: '',
            // description: '',
            // location: ''
            // ,
            // leaderId: this.props.group.leaderId
        }
        this.handleSubmit = this.handleSubmit.bind(this);

        //Working code here to use later!!!
        // const { XId } = this.props.location.state;
        // console.log("ID");
        // console.log(XId);


    }


    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault()
        this.props.createEvent(this.state)
            .then(() => this.props.history.push(`/groups/${this.props.match.params.groupId}`));
    }

    componentDidMount() {
        // debugger
        // console.log("gID");
        // console.log(this.state.groupId);


        // console.log("IN cdm");
        // const { XId } = this.props.location.state;
        // console.log("ID");
        // console.log(XId);
    }


    render() {
        // let groupId = this.props.location.test;
        // console.log("here");
        // console.log(this.props);

        return (
        <>
        <NavbarContainer navType={"groups_create"} myType={""} />
        <div className="event-create-banner">
            <span className="event-create-text">Create an Event</span>
        </div>

{/* NEED TO GET THE STUPID GROUPID THROUGHT THE ROUTER!!! */}
    
            <div>
                test:   :
                {this.state.groupId}
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
