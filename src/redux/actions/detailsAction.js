import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../../api";
import { actionTypes } from "../contants/actionTypes";

export const detailsAction = (id) => async (dispatch) => {
  let detailsData = await axios.get(gameDetailsURL(id));
  let screenshotsData = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: actionTypes.GET_GAMES_DETAILS,
    payload: { details: detailsData.data, screenshots: screenshotsData.data },
  });
};
