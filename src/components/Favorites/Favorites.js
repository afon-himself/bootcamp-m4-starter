import React, { useState } from "react";
import "./Favorites.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFilmsInList } from "../../redux-manager/Favorites/selector";
import { deleteMovieFromList } from "../../redux-manager/Favorites/action";

function Favorites() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState(true);
  const [clicked, setClicked] = useState(false);

  const movies = useSelector(getFilmsInList);

  const changeValue = (e) => {
    setTitle(e.target.value);
    e.target.value !== "" && movies[0] ? setType(false) : setType(true);
  };

  const dispatch = useDispatch();

  const deleteMovie = (e) => {
    dispatch(deleteMovieFromList(e.target.id));
  };

  const saveMovies = () => {
    setClicked(true);
  };

  return (
    <div className="favorites">
      <input
        placeholder="Новый список"
        onChange={changeValue}
        className="favorites__name"
        value={title}
      />
      <ul className="favorites__list">
        {movies &&
          movies.map((item) => {
            return (
              <li key={item.imdbID} className="favorite__list">
                {item.Title} ({item.Year})
                <button onClick={deleteMovie} id={item.imdbID}>
                  &#10006;
                </button>
              </li>
            );
          })}
      </ul>
      {clicked ? (
        <Link to="/list/:id">Перейти к списку</Link>
      ) : (
        <button
          onClick={saveMovies}
          type="button"
          className="favorites__save"
          disabled={type}
        >
          Сохранить список
        </button>
      )}
    </div>
  );
}

export default Favorites;