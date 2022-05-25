import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Favorites.css';

import store from '../../redux/store';

class Favorites extends Component {
    // state = {
    //     title: 'New list',
    //     movies: [
    //         { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    //     ]
    // }

    state = {
        id: store.getState().lists.length,
        title: 'My List',
        movies: [],
        hasBeenSaved: false
    }

    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            if (!state.favorites) return;

            this.setState({ movies: state.favorites });
        });
    }

    titleChange = event => {
        this.setState({ title: event.target.value });
    }

    deleteFavClick = (imdbID) => {
        store.dispatch({
            type: 'REMOVE_MOVIE_FROM_FAVORITES',
            payload: {
                imdbID: imdbID
            }
        });
    }

    saveClick = (movies) => {
        this.setState({ hasBeenSaved: true });
        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'title': this.state.title,
                'movies': movies.map(movie => movie.imdbID)
            }
        }).then(res => res.json()).then(data => console.log(data));
        store.dispatch({
            type: 'ADD_LIST_TO_LISTS',
            payload: {
                id: this.state.id,
                title: this.state.title,
                movies: movies
            }
        });
    }

    render() { 
        return (
            <div className="favorites">
                <input type="text" name="title" value={this.state.title} placeholder="New list" className="favorites__name" onChange={this.titleChange}/>
                <ul className="favorites__list">
                    {
                        this.state?
                            this.state.movies.map(movie => {
                                return (
                                    <li key={movie.imdbID}>
                                        {movie.title} ({movie.year})
                                        <button
                                            type="button"
                                            onClick={_ => {this.deleteFavClick(movie.imdbID)}}
                                        >
                                            X
                                        </button>
                                    </li>
                                );
                            })
                            :
                            null
                    }
                </ul>
                {
                    !this.state.hasBeenSaved?
                        <button 
                            type="button" className="favorites__save"
                            onClick={_ => {this.saveClick(this.state.movies)}}
                            disabled={this.state.movies.length === 0}
                        >
                            Save the list
                        </button>
                        :
                        <Link to={`/list/${this.state.id}`}>Go to the link</Link>
                }
                
            </div>
        );
    }
}
 
export default Favorites;