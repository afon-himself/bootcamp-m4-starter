import React, { Component } from 'react';
import './Favorites.css';

import store from '../../redux/store';

class Favorites extends Component {
    // state = {
    //     title: 'New list',
    //     movies: [
    //         { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    //     ]
    // }

    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            if (!state.movies) return; 
            const clone = state.movies.filter(movie => movie.isInFavorites)
            this.setState({ movies: clone });
        });
    }

    click = (imdbID) => {
        store.dispatch({
            type: 'REMOVE_MOVIE_FROM_LIST',
            payload: {
                imdbID: imdbID
            }
        });
    }

    render() { 
        return (
            <div className="favorites">
                <input value="New list" className="favorites__name" />
                <ul className="favorites__list">
                    {
                        this.state?
                            this.state.movies.map((item) => {
                                return <li key={item.imdbID}>{item.title} ({item.year}) <button type="button" onClick={_ => {this.click(item.imdbID)}}>x</button></li>;
                            })
                            :
                            null
                    }
                </ul>
                <button type="button" className="favorites__save">Save the list</button>
            </div>
        );
    }
}
 
export default Favorites;