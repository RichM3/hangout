import React from 'react';

class LowerSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }

    render() {
        let words = "test";

        if (this.state.type === "About") {
            words = "yes";
        } else {
            words = "fail";
        }

        return (
            <>
                <div>LOWER SECTION</div>
                <div>{words}</div>
            </>
        )
    }

}

export default LowerSection;
