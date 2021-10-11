import { gamesActions } from "../actions/gamesActions";
import { actionTypes } from "../contants/actionTypes";

const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initState, action = gamesActions) => {
  switch (action.type) {
    case actionTypes.FETCH_GAMES:
      return { ...state };
    default:
      return { ...state };
  }
};

export default gamesReducer;
