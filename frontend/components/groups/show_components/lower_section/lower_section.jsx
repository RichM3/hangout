import React from 'react';
import MembersComponent from '../members/members_index_container';
import EventsContainer from '../events/events_index_container';
import FooterContainer from "../../../footer/footer_container";


class LowerSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }

    // updateComponent(e) {
    //     this.setState({
    //         type: this.props.type
    //     });
    // }

    // handleUpdate() {
        //by calling this method react re-renders the component
        // this.setState({
        //     type: this.props.type
        // });
    // };

    render() {

        // STEPS
        // 1) make shell component for members like shell events
        // 2) test using if statement to see if dynamically load diff components
        // 3) if successful fill in all other components
        // 4) ID why MSP is not called and have to use props instead of state???


        // this.setState({
        //     type: this.props.type
        // });

        // handleUpdate;

        // debugger
        // let words = "test";

        // if (this.props.type === "About") {
        //     words = "yes";
        // } else {
        //     words = "fail";
        // }

        return (
            <>
                <div>LOWER SECTION</div>
                <FooterContainer />
                <div>{this.props.type}</div>
            </>
        )
    }

}

export default LowerSection;
