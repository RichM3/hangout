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
    return $.ajax({
        method: "patch",
        url: `api/groups/${group.id}`,
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

export const createGroup = (group) => {
    return $.ajax({
        method: "post",
        url: `api/groups`,
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

export const deleteCurrGroup = (id) => {
    return $.ajax({
        method: "delete",
        url: `api/groups/${id}`
    })
}


// These are for joining and leaving a group
export const createNewMembership = (groupId) => {
    // debugger
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


