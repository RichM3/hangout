import React from 'react';
import { Link } from 'react-router-dom';

const GroupsIndexItem = props => {
    let fillerImg = window.wafflesURL;

    return (
    <div className="fillerImg">
    <li className="li-formatting">
    {/* <label htmlFor="groupname">Group Name: </label> */}
    <Link to={`/groups/${props.group.id}`}>{props.group.groupname}</Link>
    <p>{props.group.description}</p>
    <p>{props.group.location}</p>
    {/* <img className="fillerImg" src={fillerImg} /> */}
    </li>
    </div>
    )
};

export default GroupsIndexItem