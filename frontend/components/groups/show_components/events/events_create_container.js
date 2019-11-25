import {connect} from 'react-redux';
import EventsCreate from './events_create';
import { createEvent } from '../../../../actions/event_actions';

// t.string "eventname", null: false
// t.text "description", null: false
// t.string "location", null: false
// t.datetime "starttime", null: false
// t.datetime "endtime", null: false
// t.integer "group_id", null: false


const msp = (state, ownProps) => {

    //These dont work here!!! props.location.state is passed direcly to the path in link
    // const { XId } = this.props.location.state;
    // console.log("ID");
    // console.log(XId);


    // debugger
    // let groupId = this.props.location.test;
    // debugger
    // console.log("test: " + ownProps);
    // const event = {
    //     eventname: '',
    //     description: '',
    //     location: ''
    // }

    return ({
        event: event
        // ,
        // groupId: groupId
    })
}

const mdp = (dispatch) => {
    return ({
        createEvent: (group) => dispatch(createEvent(group))
    })
}

export default connect(msp, mdp)(EventsCreate);
