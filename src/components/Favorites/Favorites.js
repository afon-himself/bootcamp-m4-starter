import React, { Component } from "react";
import "./Favorites.css";

class Favorites extends Component {
  state = {
    title: "Новый список",
    movies: [{ imdbID: "tt0068646", title: "The Godfather", year: 1972 }],
  };
  render() {
    return (
      <div className="favorites">
        <input
          value={this.state.title}
          onChange={(e) => this.setState(e.target.value)}
          className="favorites__name"
        />
        <ul className="favorites__list">
          {this.state.movies.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.title} ({item.year})
              </li>
            );
          })}
        </ul>
        <button type="button" className="favorites__save">
          Сохранить список
        </button>
      </div>
    );
  }
}

export default Favorites;
