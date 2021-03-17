const INITIAL_STATE = {
    competitors: [],
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_COMPETITORS":
        return {
          ...state,
          competitors: action.payload,
        };
  
      default:
        return state;
    }
  }
  