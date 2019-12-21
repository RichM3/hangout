export const fetchEvents = (date) => {
    return $.ajax({
        method: "get",
        url: `api/events`,
        data: {
            event: {
                date: date
            }
        }
    })
}

export const fetchEvent = (eventId) => {
    return $.ajax({
        method: "get",
        url: `api/events/${eventId}/edit`,
        // data: {
        //     event: { event }
        // }
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

export const fetchGroupEvents = (groupId) => {
    return $.ajax({
        method: "get",
        url: `api/events/group_events/${groupId}`,
        data: {
            event: {
                group_id: groupId
            }
        }
    })
}

export const deleteEvent = (eventId) => {
    debugger
    return $.ajax({
        method: "delete",
        url: `api/events/${eventId}`,
        data: {
            event: {eventId}
        }
    })
}

export const updateEvent = (event) => {
    return $.ajax({
        method: "patch",
        url: `api/events/${eventId}`,
        data: {
            event: {event}
        }
    })
}
