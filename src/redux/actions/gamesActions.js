import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../../api";
import { actionTypes } from "../contants/actionTypes";

export const gamesActions = () => async (dispatch) => {
  let popularGamesData = await axios.get(popularGamesURL());
  let upcomingGamesData = await axios.get(upcomingGamesURL());
  let newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: actionTypes.FETCH_GAMES,
    payload: {
      popularGames: popularGamesData.data.results,
      upcomingGames: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const searchGamesAction = (game_name) => async (dispatch) => {
  let searchedGamesData = await axios.get(searchGameURL(game_name));

  dispatch({
    type: actionTypes.SEARCH_GAMES,
    payload: {
      searchedGames: searchedGamesData.data.results,
    },
  });
};

export const clearGamesAction = () => {
  return {
    type: actionTypes.CLEAR_GAMES,
  };
};
