import {connect} from 'react-redux';
import EventsShow from '../../../groups/show_components/events/events_show';
import {fetchEvent} from '../../../../actions/event_actions';

const msp = (state, ownProps) => {
    // debugger
    let group = {};
    let event = {};
    if (typeof (ownProps.location.eventProps) !== "undefined") {
        event = ownProps.location.eventProps.event;
        group = state.entities.groups[ownProps.location.eventProps.event.group_id];
    }
    return ({
        event: event,
        group: group
    })
}

const mdp = (dispatch) => {
    return ({

    })
}

export default connect(msp, mdp)(EventsShow);
