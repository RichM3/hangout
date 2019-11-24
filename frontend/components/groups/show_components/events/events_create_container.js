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
    // debugger
    // groupId = ownProps.groupId;
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
