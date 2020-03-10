import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';


class GroupsEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            groupname: "",
            description: "",
            location: ""
            // ,
            // leader_id: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(parseInt(groupId));
        this.setState(this.props.group);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault()

        const formData = new FormData();
        formData.append('group[id]', this.state.id);
        formData.append('group[groupname]', this.state.groupname);
        formData.append('group[description]', this.state.description);
        formData.append('group[location]', this.state.location);
        formData.append('group[leader_id]', this.state.leader.id);

        // debugger
        if (this.state.photoUrl) {
            // debugger
            formData.append('group[photo]', this.state.photo);
        }

        // alert("submitted");
        this.props.editGroup(formData)
            .then(() => this.props.history.push(`/groups/${this.props.match.params.groupId}`));
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ photo: file, photoUrl: fileReader.result });
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        // debugger

        if (!this.props.group) {
            return null
        }

        // Accounts for images with a NA listing (no photo)
        // let fillerImg = window.peopleHangoutURL;

        // let bkImage = {
        //     backgroundImage: 'url(' + fillerImg + ')'
        // }

        // // Can't figure out how to set photoUrl to null yet in JSON
        // if (props.group.photoUrl !== "NA") {
        //     bkImage = {
        //         backgroundImage: 'url(' + props.group.photoUrl + ')'
        //     }
        // }

        // debugger
        const preview = this.state.photoUrl !== "NA" ? <img className="imgPreview" src={this.state.photoUrl} /> : null;
        
        return (
            <>
                <NavbarContainer navType={"groups_create"} myType={""} />
                <div className="create-banner">
                    <span className="create-text">Edit a Group</span>
                </div>

                <div className="group-create-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="inner-form-container">
                            <div className="inner-item-disabled" >
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


                            {/* This is the photo image */}
                            <div className="inner-item-container">
                                <label htmlFor="photo">Photo:</label>
                                <input type="file" name="photo"
                                    // value={this.state.photo} 
                                    onChange={this.handleFile.bind(this)}
                                />
                            </div>

                            {/* This is the photo image space for the preview */}
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

export default GroupsEdit;
