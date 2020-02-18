import React from 'react';
import { Link } from 'react-router-dom';

const GroupsIndexItem = props => {

    let fillerImg = window.peopleHangoutURL;

    let bkImage = {
        backgroundImage: 'url(' + fillerImg + ')'
    }

    // Can't figure out how to set photoUrl to null yet in JSON
    if (props.group.photoUrl !== "NA") {
        bkImage = {
            backgroundImage: 'url(' + props.group.photoUrl + ')'
        }
    }

    return (

        <div className="groupItemStyle" style={bkImage}>
            <li className="li-formatting">
                <Link to={`/groups/${props.group.id}`}>{props.group.groupname}</Link>
                <p>{props.group.location}</p>
            </li>
        </div>
    )
};

export default GroupsIndexItem




// Former production code to be removed after completing AWS testing - Here for reference


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