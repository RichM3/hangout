import React from 'react';
import NavbarContainer from '../../../navbar/navbar_container';
import FooterContainer from '../../../footer/footer_container';

class EventsShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    render() {
        return (
            <>
                <NavbarContainer navType={"groups_create"} myType={""} />
                <div>Here is the Event show page</div>
                {this.props.event.eventname}
                <FooterContainer myType={"groups"} />
            </>
        )
    }
}

export default EventsShow;