import { ADD_MOVIE, MOVIES_DATA } from "../constants";

export const addMovieAction = (search) => ({
  type: ADD_MOVIE,
  payload: search,
});
export const moviesData = (film) => ({
  type: MOVIES_DATA,
  payload: film,
});