export const fetchEvents = () => {
    debugger
    return $.ajax({
        method: "get",
        url: `api/events`
    })
}
