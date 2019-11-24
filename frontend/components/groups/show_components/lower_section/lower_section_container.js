import { connect } from 'react-redux';
import LowerSection from './lower_section';

const mapStateToProps = (state, ownProps) => {
    let type = ownProps.type;
    let groupId = ownProps.groupId;


    // let groupId = ownProps.match.params.groupId;
    // let currentUser = state.entities.users[state.session.id];

    return ({
        type: type,
        groupId: groupId

        // group: state.entities.groups[groupId],
        // currentUser: currentUser
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(LowerSection);
