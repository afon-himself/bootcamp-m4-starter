import { SAVE_FAVORIT_LIST_ID, SAVE_ALL_STAR_MOVIES } from "../constants";

const initialValues = {
  filmsInfo: [],
  favoritListId: null,
};

const listReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SAVE_FAVORIT_LIST_ID:
      return {
        ...state,
        favoritListId: action.payload,
      };

    case SAVE_ALL_STAR_MOVIES:
      return {
        ...state,
        filmsInfo: action.payload,
      };

    default:
      return state;
  }
};

export default listReducer;