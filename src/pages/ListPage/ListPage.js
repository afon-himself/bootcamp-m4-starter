import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ListPage.css";

class ListPage extends Component {
  state = {
    movies: [{ title: "The Godfather", year: 1972, imdbID: "tt0068646" }],
  };
  componentDidMount() {
    const id = this.props.match.params;
    console.log(id);
    // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID
  }
  render() {
    return (
      <div className="list-page">
        <h1 className="list-page__title">Мой список</h1>
        <ul>
          {this.state.movies.map((item) => {
            return (
              <li key={item.imdbID}>
                <Link
                  to="https://www.imdb.com/title/tt0068646/"
                  target="_blank"
                >
                  {item.title} ({item.year})
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListPage;
