import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../../api";
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
