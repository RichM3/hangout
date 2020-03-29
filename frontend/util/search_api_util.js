export const fetchSearchInfo = (searchCriteria) => {
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
