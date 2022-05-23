import { SAVE_IN_LIST, DELETE_MOVIE, SAVE_MOVIE } from "../constants";

const initialValues = {
  filmFavorits: [],
};

const movieItemReducer = (state = initialValues, action) => {
  const itemExist = state.filmFavorits.some(
    (el) => el?.imdbID === action.payload?.imdbID
  );
  switch (action.type) {
    case SAVE_IN_LIST:
      if (itemExist) return state;
      return {
        ...state,
        filmFavorits: [...state.filmFavorits, action.payload],
      };
    case DELETE_MOVIE:
      if (itemExist) return state;
      return {
        ...state,
        filmFavorits: [
          ...state.filmFavorits.filter((el) => el.imdbID !== action.payload),
        ],
      };
    case SAVE_MOVIE:
      if (itemExist) return state;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default movieItemReducer;