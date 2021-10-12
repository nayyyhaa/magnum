import { actionTypes } from "../contants/actionTypes";

const initState = {
  popular: [],
  upcoming: [],
  newGames: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GAMES:
      return {
        ...state,
        popular: action.payload.popularGames,
        upcoming: action.payload.upcomingGames,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
