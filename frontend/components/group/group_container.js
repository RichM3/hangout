import { connect } from 'react-redux';
import Group from './group';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchGroups: (userId) => dispatch(fetchGroups(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);
