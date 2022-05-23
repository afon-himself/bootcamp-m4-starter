import React from "react";
import { useDispatch } from "react-redux";
import { saveInListAction } from "../../redux-manager/Favorites/action";
import "./MovieItem.css";

function MovieItem(props) {
  const { Title, Year, Poster } = props;

  const dispatch = useDispatch();

  const addInList = () => {
    dispatch(saveInListAction(props));
  };
  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          onClick={addInList}
          type="button"
          className="movie-item__add-button"
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
}

export default MovieItem;