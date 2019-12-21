import {connect} from 'react-redux';
import EventsCreate from './events_form';
import { createEvent } from '../../../../actions/event_actions';

const msp = (state, ownProps) => {
    const groupId = ownProps.match.params.groupId;
    event = {
        eventname: '',
        description: '',
        location: '',
        startDate: '',
        starttimevalue: '',
        endtimevalue: '',
        starttime: '',  //this is for the db insert value - concat time and date
        endtime: '',    //this is for the db insert value
        groupId: groupId
    }

    return ({
        event: event,
        // groupId: groupId,
        formType: "CreateEvent"
    })
}

const mdp = (dispatch) => {
    return ({
        action: (event) => dispatch(createEvent(event))
    })
}

export default connect(msp, mdp)(EventsCreate);
