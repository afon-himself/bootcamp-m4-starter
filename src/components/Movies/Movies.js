import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { useSelector } from "react-redux";
import "./Movies.css";
import { getCartMoviesSelector } from "../../redux-manager/Movies/selector";

function Movies() {
  const movies = useSelector(getCartMoviesSelector);

  return (
    <ul className="movies">
      {movies &&
        movies.map((moviesList) => {
          return (
            <li className="movies__item" key={moviesList.imdbID}>
              <MovieItem {...moviesList} />
            </li>
          );
        })}
    </ul>
  );
}

export default Movies;