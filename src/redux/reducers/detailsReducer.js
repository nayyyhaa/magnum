import { actionTypes } from "../contants/actionTypes";

let initState = {
  details: {},
  screenshots: {},
  isLoading: true,
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_GAMES_DETAILS:
      return {
        ...state,
        details: action.payload.details,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    case actionTypes.LOADING_DETAIL:
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default detailsReducer;
