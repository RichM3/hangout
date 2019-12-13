import { connect } from 'react-redux';
import Calendar from './calendar';
// import { createGroup } from '../../actions/group_actions';

const msp = (state, ownProps) => {

    return ({
    })
}

const mdp = (dispatch) => {
    return ({
        // createGroup: (group) => dispatch(createGroup(group))
    })
}

export default connect(msp, mdp)(Calendar);
