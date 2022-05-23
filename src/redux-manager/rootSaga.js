import { all, call } from "redux-saga/effects";
import cartSaga from "./Movies/saga";
import favoritesSaga from "./Favorites/saga";
import listSaga from "./ListPage/saga"

function* rootSaga() {
  yield all([call(cartSaga),call(favoritesSaga),call(listSaga)]);
}

export default rootSaga;