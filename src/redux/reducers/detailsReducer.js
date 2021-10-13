import { actionTypes } from "../contants/actionTypes";

let initState = {
  details: {},
  screenshots: {},
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_GAMES_DETAILS:
      return {
        ...state,
        details: action.payload.details,
        screenshots: action.payload.screenshots,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;
