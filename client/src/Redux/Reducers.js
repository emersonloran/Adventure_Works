const INITIAL_STATE = {
    competitors: [],

    tracks: [],

    races: [],
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_COMPETITORS":
        return {
          ...state,
          competitors: action.payload,
        };

      case "POST_COMPETITOR":
        return {
          ...state,
          competitors: [...state.competitors, action.payload]
        };

      case "DELETE_COMPETITOR":
        return {
          ...state,
          competitors: state.competitors.filter(competitor => competitor.id !== action.payload),
        };

      case "GET_TRACKS":
        return {
          ...state,
          tracks: action.payload,
        };

      case "POST_TRACK":
        return {
          ...state,
          tracks: [...state.tracks, action.payload]
        };

      case "DELETE_TRACK":
        return {
          ...state,
          tracks: state.tracks.filter(track => track.id !== action.payload),
        };

      case "GET_RACES":
        return {
          ...state,
          races: action.payload,
        };
  
      case "POST_RACE":
        return {
          ...state,
          races: [...state.races, action.payload]
        };

      case "DELETE_RACE":
        return {
          ...state,
          races: state.races.filter(race => race.id !== action.payload),
        };

      default:
        return state;
    }
  }
  