import React from 'react';

class MoreIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        return (
            <>
                {/* <div>MORE</div> */}

                <div className="page-wrapper">
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    <h1>More About Us: </h1>
                    <div className="spacer"> </div>
                    <div className="spacer"> </div>
                    {/* <div><p>{this.props.desc}</p></div> */}
                </div>
                <div className="related-events"></div>

            </>
        )
    }

}

export default MoreIndex;
