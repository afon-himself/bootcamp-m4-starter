import React, { useState } from "react";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import { addMovieAction } from "../../redux-manager/Movies/action";

function SearchBox() {
  const [searchLine, setSearchLine] = useState("");

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();

  const searchMovie = () => {
    dispatch(addMovieAction(searchLine));
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
          onClick={searchMovie}
        >
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchBox;