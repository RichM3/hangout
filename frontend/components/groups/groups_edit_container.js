import { connect } from 'react-redux';
import GroupsEdit from './groups_edit';
import { editGroup, fetchGroup } from '../../actions/group_actions';

const msp = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    // let groupId = 
    // debugger
    let group = state.entities.groups[parseInt(ownProps.match.params.groupId)]
    // const group = {
        // groupname: '',
        // description: '',
        // location: '',
        // leaderId: currentUser.id
    // }

    return ({
        group: group
    })
}

const mdp = (dispatch) => {
    return ({
        fetchGroup: (id) => dispatch(fetchGroup(id)),
        editGroup: (group) => dispatch(editGroup(group))
    })
}

export default connect(msp, mdp)(GroupsEdit);
