import React, { useState } from "react";
import "./SearchBox.css";
import { connect } from "react-redux";
import { fetchMovies } from "../../redux/actions";
function SearchBox(props) {
    const [searchLine, setSearchLine] = useState("");

    searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    };
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        props.dispatch(fetchMovies(this.state.searchLine));
    };

    return (
        <div className="search-box">
            <form
                className="search-box__form"
                onSubmit={this.searchBoxSubmitHandler}
            >
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={this.searchLineChangeHandler}
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