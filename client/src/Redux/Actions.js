export function getCompetitors (competitors) {
    return {
        type: 'GET_COMPETITORS',
        payload: competitors
    }
}

export function postCompetitor (competitor) {
    return {
        type: 'POST_COMPETITOR',
        payload: competitor
    }
}