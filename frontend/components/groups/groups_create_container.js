import { connect } from 'react-redux';
import GroupsCreate from './groups_create';
import { createGroup } from '../../actions/group_actions';

const msp = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    const group = {
        groupname: '',
        description: '',
        location: '',
        leaderId: currentUser.id 
    }
    // debugger

    return({
        group: group
        //, currentUser: currentUser
    })
}

const mdp = (dispatch) => {
    return({
        createGroup: (group) => dispatch(createGroup(group))
    })
}

export default connect(msp, mdp)(GroupsCreate);
