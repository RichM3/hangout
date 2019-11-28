import {connect} from 'react-redux';
import EventsCreate from './events_create';
import { createEvent } from '../../../../actions/event_actions';


const msp = (state, ownProps) => {
    // debugger
    // const { groupId } = ownProps.location.state;
    const { groupId } = ownProps.match.params;
    // alert(groupId);
    return ({
        groupId: groupId
    })
}

const mdp = (dispatch) => {
    return ({
        createEvent: (event) => dispatch(createEvent(event))
    })
}

export default connect(msp, mdp)(EventsCreate);
