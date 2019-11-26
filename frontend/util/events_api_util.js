export const fetchEvents = () => {
    return $.ajax({
        method: "get",
        url: `api/events`
    })
}

export const createEvent = (event) => {
    debugger
    return $.ajax({
        method: "post",
        url: `api/events`,
        data: {
            event: {
                eventname: event.eventname,
                description: event.description,
                location: event.location,
                starttime: event.starttime,
                endtime: event.endtime,
                group_id: event.groupId
            }
        }
    })
}