import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        list: {
            id: -1,
            title: '',
            movies: []
        }
    }

    componentDidMount() {
        // const apikey = "c089abf1";
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
        const params = this.props.match.params;
        let lists = JSON.parse(localStorage.getItem('lists'));
        if (!Array.isArray(lists)) lists = [lists];
        const list = lists.find(list => list.id === +params.id);
        
        this.setState({ list: list });
    }

    render() {
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.list ? this.state.list.title : "My List"}</h1>
                <ul>
                    {
                        this.state.list && this.state.list.movies?
                        this.state.list.movies.map((movie) => {
                        return (
                            <li key={movie.imdbID}>
                                <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noopener noreferrer">
                                    {movie.title} ({movie.year})
                                </a>
                            </li>
                        );
                    })
                    :null
                    }
                </ul>
            </div>
        );
    }
}
 
export default ListPage;