export const fetchAllRsvps = () => {
    return $.ajax({
        method: "get",
        url: `api/rsvps`
    })
}

export const fetchRsvp = (eventId) => {
    return $.ajax({
        method: "get",
        url: `api/rsvps/${eventId}`
    })
}

export const createRsvp = (rsvp) => {
    return $.ajax({
        method: "post",
        url: `api/rsvp`,
        data: {
            rsvp: {
                event_id: rsvp.eventId,
                user_id: rsvp.userId,
                attending: rsvp.attending
            }
        }
    })
}

export const updateRsvp = (rsvp) => {
    return $.ajax({
        method: "patch",
        url: `api/rsvp/${rsvp.id}`,
        data: {
            rsvp: {
                user_id: rsvp.userId,
                event_id: rsvp.eventId,
                attending: rsvp.attending
            }
        }
    })
}

