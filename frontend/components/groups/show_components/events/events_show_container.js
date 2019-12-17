import {connect} from 'react-redux';
import EventsShow from '../../../groups/show_components/events/events_show';
import {fetchEvent} from '../../../../actions/event_actions';

const msp = (state, ownProps) => {
    let event = ownProps.location.eventProps.event;

    return ({
        event: event
    })
}

const mdp = (dispatch) => {
    return ({

    })
}

export default connect(msp, mdp)(EventsShow);
