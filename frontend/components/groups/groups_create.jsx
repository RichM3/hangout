import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';

class GroupsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupname: '',
            description: '',
            location: '',
            leaderId: this.props.group.leaderId,
            photo: null,
            photoUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({photo: file, photoUrl: fileReader.result});
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
    
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    validateGroup() {
        if (this.state.photo) {
            return true;
        } else {
            alert("Photo is required to create a group")
            return false;
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        if (this.validateGroup()) { 
            const formData = new FormData();
            formData.append('group[groupname]', this.state.groupname);
            formData.append('group[description]', this.state.description);
            formData.append('group[location]', this.state.location);
            formData.append('group[leader_id]', this.state.leaderId);
            if (this.state.photoUrl) {
                formData.append('group[photo]', this.state.photo);
            }
            
            // Display the values
            // for (var value of formData.values()) {
            //     console.log(value);
            // }

            this.props.createGroup(formData)
                .then(() => this.props.history.push('/my-groups'));

                //Old data before adding photo -- Note this needs to push to my-groups not groups or the header and footer do not appear on page
            // this.props.createGroup(this.state)
            //     .then(() => this.props.history.push('/groups'));
        }
    }


    render() {

        const preview = this.state.photoUrl ? <img className="imgPreview" src={this.state.photoUrl} /> : null;

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

                    <div className="inner-item-container">
                        <label htmlFor="photo">Photo:</label>
                        <input type="file" name="photo"
                            onChange={this.handleFile.bind(this)}
                        />
                    </div>

                    <div className="inner-image-preview-container">
                        <label htmlFor="preview">Photo Preview:</label>
                        <div className="inner-image-preview-container-img">{preview}</div>
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
