import { takeEvery, put, call, select } from "redux-saga/effects";
import { GET_STAR_MOVIES_ID } from "../constants";
import { saveAllStarMoviesAction } from "./action";
import { getMoviesID, gethMoviesInfo } from "../REST";
import { getFavoritListId } from "./selectors";

function* workerStarMoviesId() {
  try {
    const favoritListId = yield select(getFavoritListId);
    const filmsId = yield call(getMoviesID, favoritListId);
    const allFilmsInfo = [];

    for (let i = 0; i < filmsId.movies.length; i++) {
      const filmInfo = yield call(gethMoviesInfo, filmsId.movies[i]);
      allFilmsInfo.push(filmInfo);
    }

    yield put(saveAllStarMoviesAction(allFilmsInfo));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(GET_STAR_MOVIES_ID, workerStarMoviesId);
}