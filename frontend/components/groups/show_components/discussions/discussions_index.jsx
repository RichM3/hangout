import React from 'react';

class DiscussionsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        return (
            <>
                {/* <div>DISCUSSIONS</div> */}

                <div className="page-wrapper">
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    <h1>Ongoing Discussions: </h1>
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    {/* <div><p>{this.props.desc}</p></div> */}
                </div>
                <div className="related-events"></div>

            </>
        )
    }

}

export default DiscussionsIndex;
