export const fetchEvents = () => {
    return $.ajax({
        method: "get",
        url: `api/events`
    })
}
