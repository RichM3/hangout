import React from 'react';
import { Link } from 'react-router-dom';

const GroupsIndexItem = props => {
    let fillerImg = window.wafflesURL;

    return (
    <div className="fillerImg">
    <li className="li-formatting">
    <Link to={`/groups/${props.group.id}`}>{props.group.groupname}</Link>
    <p>{props.group.location}</p>
    </li>
    </div>
    )
};

export default GroupsIndexItem