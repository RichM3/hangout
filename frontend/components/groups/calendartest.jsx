import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import FooterContainer from '../footer/footer_container';

// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';


class Calendartest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return(
        <>
        <NavbarContainer navType={"groups_create"} myType={""} />

        <div className="event-create-container">
            <div>Test</div>
        </div>

        <FooterContainer myType={"groups"} />

        </>
        )
    }

}

export default Calendartest;
