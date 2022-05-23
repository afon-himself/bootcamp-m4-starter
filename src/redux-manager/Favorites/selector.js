export const getFilmsInList = (state) => state.movieItemReducer?.filmFavorits;
export const deleteFilmFromList = (state) =>
  state.movieItemReducer?.filmFavorits;
export const saveMovieList = (state) => state.movieItemReducer.filmFavorits;