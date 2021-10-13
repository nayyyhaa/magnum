import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailsReducer from "./detailsReducer";

const allReducers = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});

export default allReducers;
