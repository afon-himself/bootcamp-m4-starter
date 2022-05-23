import { takeEvery,  call } from "redux-saga/effects";
import { SAVE_MOVIE } from "../constants";
import { saveFetchMovieList } from "../REST";


function* workerMovies(action) {
  try {
    const data = yield call(saveFetchMovieList, action.payload);
  } catch (err) {
    console.log("ERROR", err);
  }
}

export default function* watcherMovies() {
  yield takeEvery(SAVE_MOVIE, workerMovies);
}