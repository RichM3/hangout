export const fetchGroups = () => {
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

export const editGroup = (group) => {
    // debugger
    // Display the values
    // for (var value of group.values()) {
    //     console.log(value);
    // }

    const id = group.get('group[id]');

    return $.ajax({
        method: "patch",
        url: `api/groups/${id}`,
        data: group,
        contentType: false,
        processData: false
    });
}


// Code from before AWS inclusion
// export const editGroup = (group) => {
//     return $.ajax({
//         method: "patch",
//         url: `api/groups/${group.id}`,
//         data: {
//             group: {
//                 groupname: group.groupname,
//                 description: group.description,
//                 location: group.location,
//                 leader_id: group.leaderId,
//                 photo: group.photo,
//                 photoUrl: group.photoUrl
//             }
//         }
//     })
// }

export const createGroup = (group) => {

    // // Display the values
    // for (var value of group.values()) {
    //     console.log(value);
    // }

    return $.ajax({
        method: "post",
        url: `api/groups`,
        data: group,
        contentType: false,
        processData: false
    });
}


// Code from before AWS inclusion
// export const createGroup = (group) => {
//     return $.ajax({
//         method: "post",
//         url: `api/groups`,
//         data: {
//             group: {
//             groupname: group.groupname,
//             description: group.description,
//             location: group.location,
//             leader_id: group.leaderId
//             }
//         }
//     })
// }

export const deleteCurrGroup = (id) => {
    return $.ajax({
        method: "delete",
        url: `api/groups/${id}`
    })
}


// These are for joining and leaving a group
export const createNewMembership = (groupId) => {
    return $.ajax({
        method: "post",
        url: `api/groups/create_membership/${groupId}`
    })
}

export const deleteCurrMembership = (groupId) => {
    return $.ajax({
        method: "delete",
        url: `api/groups/remove_membership/${groupId}`
    })
}
