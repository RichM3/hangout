import { connect } from 'react-redux';
import GroupsCreate from './groups_create';

const msp = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    const group = {
        name: '',
        description: '',
        location_id: '',
        organizer_id: currentUser.id 
    }
    // debugger

    return({
        group: group
        //, currentUser: currentUser
    })
}

const mdp = (dispatch) => {
    return({

    })
}

export default connect(msp, mdp)(GroupsCreate);
