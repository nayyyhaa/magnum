import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../../api";

export const actionTypes = {
  FETCH_GAMES: "FETCH_GAMES",
};
