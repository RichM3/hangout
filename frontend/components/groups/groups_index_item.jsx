import React from 'react';
import { Link } from 'react-router-dom';

const GroupsIndexItem = props => (
    <div>
    <label htmlFor="groupname">Group Name: </label>
    <Link to={`/groups/${props.group.id}`}>{props.group.groupname}</Link>
    </div>
);

export default GroupsIndexItem