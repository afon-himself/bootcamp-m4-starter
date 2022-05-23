import { SAVE_IN_LIST, DELETE_MOVIE, SAVE_MOVIE } from "../constants";

export const saveInListAction = (payload) => ({ type: SAVE_IN_LIST, payload });
export const deleteMovieFromList = (payload) => ({
  type: DELETE_MOVIE,
  payload,
});

export const saveMovieListAction = (payload) => ({
  type: SAVE_MOVIE,
  payload,
});