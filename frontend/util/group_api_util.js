export const fetchGroups = () => {
    // debugger
    return $.ajax({
        method: "get",
        url: `api/groups`
    })
}

export const fetchGroup = (id) => {
    return $.ajax({
        method: "get",
        url: `api/groups/${id}`
    })
}

// export const fetchLeaderName = (leaderId) => {
//     return $.ajax({
//         method: "get",
//         url: `api/users/${leaderId}`
//     })
// }

export const createGroup = (group) => {
    // debugger
    return $.ajax({
        method: "post",
        url: `api/groups`,
        // data: { group }
        data: {
            group: {
            groupname: group.groupname,
            description: group.description,
            location: group.location,
            leader_id: group.leaderId
            }
        }
    })
}

// export const createUserGroup = (group) => {
//     // debugger
//     return $.ajax({
//         method: "post",
//         url: `api/usergroups`,
//         // data: { group }
//         data: { 
//             ...group, 
//             leader_id: group.leaderId
//          }
//     })
// }

export const deleteGroup = (id) => {
    return $.ajax({
        method: "delete",
        url: `api/groups/${id}`
    })
}

// export const deleteUserGroup = (id) => {
//     return $.ajax({
//         method: "delete",
//         url: `api/usergroups/${id}`
//     })
// }
