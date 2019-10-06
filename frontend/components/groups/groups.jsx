import React from 'react';

class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.group;
        this.state.leaderId = this.props.group.currentUser.id;
    }

    render() {
        return (
        <>
        <div className="showname" >Hi, {this.state.currentUser.username}!</div>
        <div className="showname" >Hi, {this.state.currentUser.id}!</div>
        <div className="showname" >Hi, {this.state.leaderId}!</div>
        <div className="showname" >Hi, {this.state.currentUser.email}!</div>
        {/* <div className="showname" >Pw, {this.state.group.password}!</div> */}

        <section id="groupInputs">
            <form className="group-form-box">
            <label htmlFor="groupname">Group Name
                <input className="group-input" type="text" name="groups[groupname]" id="groupname" value={this.state.groupname} />
            </label>
            {/* <label htmlFor="leaderId">LeaderId -- Testing
                <input className="group-input" type="text" name="groups[leaderId]" id="leaderId" value={this.state.leaderId} />
            </label> */}
            </form>
        </section>
        </>
        );
    }
}

export default Groups;


// <section id="groupInputs">
//     <form className="group-form-box">
//         <label htmlFor="groupname">Group Name
//                     <input className="group-input" type="text" name="groups[groupname]" id="groupname" value={this.state.groupname} />
//         </label>
//         <label htmlFor="description">Description
//                     <input className="group-input" type="text" name="groups[description]" id="description" value={this.state.description} />
//         </label>
//         <label htmlFor="location">Location
//                     <input className="group-input" type="text" name="groups[location]" id="location" value={this.state.location} />
//         </label>
//         <label htmlFor="leaderId">LeaderId -- Testing
//                     <input className="group-input" type="text" name="groups[leaderId]" id="leaderId" value={this.state.leaderId} />
//         </label>
//     </form>
// </section>

