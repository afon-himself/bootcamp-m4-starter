import React, { useState } from "react";
import "./SearchBox.css";
import { connect } from "react-redux";
import { fetchMovies } from "../../redux/actions/actions";

function SearchBox(props) {
    const [searchLine, setSearchLine] = useState("");

    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    };
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        props.dispatch(fetchMovies(searchLine));
    };

    return (
        <div className="search-box">
            <form
                className="search-box__form"
                onSubmit={searchBoxSubmitHandler}
            >
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
                >
                    Искать
                </button>
            </form>
        </div>
    );
}

export default connect(null)(SearchBox);