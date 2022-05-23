import { takeEvery, put, call } from "redux-saga/effects";
import { ADD_MOVIE } from "../constants";
import { moviesData } from "./action";
import { fetchMovies } from "../REST";

function* workerMovie(action) {
  try {
    const data = yield call(fetchMovies, action.payload);
    yield put(moviesData(data));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherCart() {
  yield takeEvery(ADD_MOVIE, workerMovie);
}