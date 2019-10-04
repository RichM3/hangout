import { connect } from 'react-redux';
import Groups from './groups';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchGroups: (userId) => dispatch(fetchGroups(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
