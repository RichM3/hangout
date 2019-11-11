import React from 'react';
import AboutContainer from '../about/about_index_container';
import MembersContainer from '../members/members_index_container';
import EventsContainer from '../events/events_index_container';
import PhotosContainer from '../photos/photos_index_container';
import DiscussionsContainer from '../discussions/discussions_index_container';
import MoreContainer from '../more/more_index_container';


class LowerSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }


    render() {

        // NOTES!!!!!!!
        // X) ID why MSP is not called and have to use props instead of state???

        let myContainer = "";

        switch (this.props.type) {
            case "About":
                myContainer = <AboutContainer desc={this.props.desc}/>;
                break;
            case "Events":
                myContainer = <EventsContainer />;
                break;
            case "Members":
                myContainer = <MembersContainer />;
                break;
            case "Photos":
                myContainer = <PhotosContainer />;
                break;
            case "Discussions":
                myContainer = <DiscussionsContainer />;
                break;
            case "More":
                myContainer = <MoreContainer />;
                break;
            default:
                break;
        }

        // let myContainer = <EventsContainer />

        return (
            <>
                {/* <div>LOWER SECTION</div> */}



                {/* < {myContainer} /> */}
                
                
                
                {/* <FooterContainer /> */}
                {/* <EventsContainer /> */}
                {myContainer}
                {/* <div>{this.props.type}</div> */}
            </>
        )
    }

}

export default LowerSection;
