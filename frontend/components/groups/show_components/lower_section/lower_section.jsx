import React from 'react';

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
        // this.setState({
        //     type: this.props.type
        // });

        // handleUpdate;

        debugger
        // let words = "test";

        // if (this.props.type === "About") {
        //     words = "yes";
        // } else {
        //     words = "fail";
        // }

        return (
            <>
                <div>LOWER SECTION</div>
                <div>{this.props.type}</div>
            </>
        )
    }

}

export default LowerSection;
