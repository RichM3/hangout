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
    })
}

export const createEvent = (event) => {
    // let start = moment(event.starttime).format('YYYY-MM-DD-HH:mm:ss');
    // let end = moment(event.endtime).format('YYYY-MM-DD-HH:mm:ss');

    return $.ajax({
        method: "post",
        url: `api/events`,
        data: {
            event: {
                eventname: event.eventname,
                description: event.description,
                location: event.location,
                lat: event.lat,
                lng: event.lng,
                starttime: event.starttime,
                endtime: event.endtime,
                // starttime: start,
                // endtime: end,
                group_id: event.group_id
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
        url: `api/events/${event.id}`,
        data: {
            event: {

                eventname: event.eventname,
                description: event.description,
                location: event.location,
                lat: event.lat,
                lng: event.lng,
                starttime: event.starttime,
                endtime: event.endtime,
                group_id: event.group_id

                // eventname: event.eventname,
                // description: event.description,
                // location: event.location,
                // starttime: event.starttime,
                // endtime: event.endtime,
                // group_id: event.group_id
            }
        }
    })
}
