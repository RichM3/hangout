import { connect } from 'react-redux';
import GroupsShow from './groups_show';
import { fetchGroup } from '../../actions/group_actions';

const msp = (state, ownProps) => {
    let groupId = ownProps.match.params.groupId;
    let currentUser = state.entities.users[state.session.id];

    return({
        group: state.entities.groups[groupId],
        currentUser: currentUser
    })
}

const mdp = (dispatch) => {
    return({
        fetchGroup: (id) => dispatch(fetchGroup(id))
    })
}

export default connect(msp, mdp)(GroupsShow);
