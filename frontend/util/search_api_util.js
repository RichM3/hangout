export const fetchSearchInfo = (searchCriteria) => {
    // debugger
    return $.ajax({
        method: "get",
        url: `api/search`,
        data: {
            search: {
                searchCriteria: searchCriteria
            }
        }
    })
}
