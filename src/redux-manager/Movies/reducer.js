import { MOVIES_DATA } from "../constants";

const initialValues = {
  movieGoods: [],
};

const cartReducer = (state = initialValues, action) => {
  switch (action.type) {
    case MOVIES_DATA:
      console.log(action.payload);
      return { ...state, movieGoods: action.payload };
    default:
      return state;
  }
};

export default cartReducer;