import React from 'react';
import { Link } from 'react-router-dom';

class GroupsShow extends React.Component {

    componentDidMount() {
        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(groupId);
    }

    render() {

        // debugger

        if (!this.props.group) {
            return null
        }

        return(
            <div>
                <Link to="/groups" >Group Index</Link>
                <h2>{this.props.group.groupname}</h2>
            </div>
        )
    }
}

export default GroupsShow;
