import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

import store from '../../redux/store';

class Movies extends Component {
    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            // console.log(state)
            this.setState({ movies: state.movies });
        });
    }

    render() { 
        return ( 
            <ul className="movies">
                {
                    this.state && this.state.movies?
                        this.state.movies.map((movie) => (
                            <li className="movies__item" key={movie.imdbID}>
                                <MovieItem {...movie} />
                            </li>
                        ))
                        :
                        null
                }
            </ul>
        );
    }
}
 
export default Movies;