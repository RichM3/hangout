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

