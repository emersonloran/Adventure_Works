const INITIAL_STATE = {
    competitors: [],

    // competitor: {},
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
  
      default:
        return state;
    }
  }
  