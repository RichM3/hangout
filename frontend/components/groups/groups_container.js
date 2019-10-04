import { connect } from 'react-redux';
import Groups from './groups';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
    debugger
    return ({
        group: {
            currentUser: users[session.id],
            groupname: "",
            description: "",
            location: "",
            // leaderId: ""
            // leaderId: currentUser.id
            // leaderId: currentUser.id
            // leaderId: users[session.id],
        }
    });
};

const mapDispatchToProps = dispatch => ({
    fetchGroups: (userId) => dispatch(fetchGroups(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
