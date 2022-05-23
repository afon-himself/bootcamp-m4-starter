import { GET_STAR_MOVIES_ID, SAVE_ALL_STAR_MOVIES } from "../constants";

export const getStarMoviesIdAction = () => ({
  type: GET_STAR_MOVIES_ID,
});

export const saveAllStarMoviesAction = (arr) => ({
  type: SAVE_ALL_STAR_MOVIES,
  payload: arr,
});