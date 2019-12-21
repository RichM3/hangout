import {connect} from 'react-redux';
import EventsForm from './events_form';
import {updateEvent, fetchEvent} from '../../../../actions/event_actions';

const msp = (state, ownProps) => {
    eventId = ownProps.match.param.eventId;
    event = state.events[eventId];
    return ({
        event: event,
        // group: group,
        formType: "UpdateEvent"
    })
}

const mdp = (dispatch) => {
    return ({
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
        action: (event) => dispatch(updateEvent(event))
    })
}

class EventsEditForm extends React.Component {
    
    componentDidMount() {
        let eventId = this.props.match.params.eventId;
        this.props.fetchEvent(eventId);
    }

    render() {
        const {action, formType, event} = this.props;
        return (
            <EventsForm
                action={action}
                formType={formType}
                event={event} />
        );
    }
}

export default connect(msp, mdp)(EventsEditForm);
