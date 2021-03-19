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

export function deleteCompetitor (id) {
    return {
        type: 'DELETE_COMPETITOR',
        payload: id
    }
}

export function getTracks (tracks) {
    return {
        type: 'GET_TRACKS',
        payload: tracks
    }
}

export function getUsedTracks (used_tracks) {
    return {
        type: 'GET_USED_TRACKS',
        payload: used_tracks
    }
}

export function postTrack (track) {
    return {
        type: 'POST_TRACK',
        payload: track
    }
}

export function deleteTrack (id) {
    return {
        type: 'DELETE_TRACK',
        payload: id
    }
}

export function getRaces (races) {
    return {
        type: 'GET_RACES',
        payload: races
    }
}

export function postRace (race) {
    return {
        type: 'POST_RACE',
        payload: race
    }
}

export function deleteRace (id) {
    return {
        type: 'DELETE_RACE',
        payload: id
    }
}