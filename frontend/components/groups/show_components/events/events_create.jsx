import React from 'react';
// import { Link } from 'react-router-dom';
import NavbarContainer from '../../../navbar/navbar_container';
import FooterContainer from '../../../footer/footer_container';


class EventsCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
        <>
        <NavbarContainer navType={"groups_create"} myType={""} />
        <div className="create-banner">
            <span className="create-text">Create an Event</span>
        </div>


            <div>

                <form action="">

                    <div>Event name</div>

                    <div>Location</div>

                    <div>Description</div>

                </form>
                
            </div>



        <FooterContainer myType={"groups"} />
        </>
        )
    }

}

export default EventsCreate;
