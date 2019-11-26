import {connect} from 'react-redux';
import EventsCreate from './events_create';
import { createEvent } from '../../../../actions/event_actions';


const msp = (state, ownProps) => {
    return ({
        // event: event
    })
}

const mdp = (dispatch) => {
    return ({
        createEvent: (event) => dispatch(createEvent(event))
    })
}

export default connect(msp, mdp)(EventsCreate);
