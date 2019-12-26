export const fetchRsvp = (eventId) => {
    return $.ajax({
        method: "get",
        url: `api/rsvps/${eventId}`
    })
}


