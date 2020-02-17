import React from 'react';
import { Link } from 'react-router-dom';

const GroupsIndexItem = props => {
    // let fillerImg = window.wafflesURL;
    
    let fillerImg = window.peopleHangoutURL;

    let bkImage = {
        backgroundImage: 'url(' + fillerImg + ')'
    }

    // debugger
    // Can't figure out how to set photoUrl to null yet in JSON
    if (props.group.photoUrl !== "NA") {
        // debugger
        bkImage = {
            backgroundImage: 'url(' + props.group.photoUrl + ')'
        }
    }

    return (

        // < div className = { theClass } >
        <div className="groupItemStyle" style={bkImage}>
            <li className="li-formatting">
                <Link to={`/groups/${props.group.id}`}>{props.group.groupname}</Link>
                <p>{props.group.location}</p>
            </li>
        </div>
    )
};

export default GroupsIndexItem





// This is the production code ----------------------------------------------------
// This is the production code ----------------------------------------------------
// This is the production code ----------------------------------------------------
// This is the production code ----------------------------------------------------
// This is the production code ----------------------------------------------------

// import React from 'react';
// import { Link } from 'react-router-dom';

// const GroupsIndexItem = props => {
//     let fillerImg = window.wafflesURL;

//     return (
//     <div className="fillerImg">
//     <li className="li-formatting">
//     <Link to={`/groups/${props.group.id}`}>{props.group.groupname}</Link>
//     <p>{props.group.location}</p>
//     </li>
//     </div>
//     )
// };

// export default GroupsIndexItem