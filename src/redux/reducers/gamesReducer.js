import { actionTypes } from "../contants/actionTypes";

const initState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searchedGames: [],
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
    case actionTypes.SEARCH_GAMES:
      return {
        ...state,
        searchedGames: action.payload.searchedGames,
      };
    case actionTypes.CLEAR_GAMES:
      return {
        ...state,
        searchedGames: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
