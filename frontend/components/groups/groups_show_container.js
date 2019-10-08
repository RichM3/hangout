import { connect } from 'react-redux';
import GroupsShow from './groups_show';
import { fetchGroup } from '../../actions/group_actions';

const msp = (state, ownProps) => {
    let groupId = ownProps.match.params.groupId;
    // debugger

    return({
        group: state.entities.groups[groupId]
    })
}

const mdp = (dispatch) => {
    return({
        fetchGroup: (id) => dispatch(fetchGroup(id))
    })
}

export default connect(msp, mdp)(GroupsShow);
