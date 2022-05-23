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
        favorites: [],
        hasBeenSaved: false
    }

    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState();
            if (!state.favorites) return;

            this.setState({ favorites: state.favorites });
        });
    }

    deleteFavClick = (imdbID) => {
        store.dispatch({
            type: 'REMOVE_MOVIE_FROM_FAVORITES',
            payload: {
                imdbID: imdbID
            }
        });
    }

    saveClick = (favorites) => {
        this.setState({ hasBeenSaved: true });
        store.dispatch({
            type: 'ADD_LIST_TO_LISTS',
            payload: {
                id: this.state.id,
                title: this.state.title,
                movies: favorites
            }
        });
    }

    titleChange = event => {
        this.setState({ title: event.target.value });
    }

    render() { 
        return (
            <div className="favorites">
                <input type="text" name="title" value={this.state.title} placeholder="New list" className="favorites__name" onChange={this.titleChange}/>
                <ul className="favorites__list">
                    {
                        this.state?
                            this.state.favorites.map(favorite => {
                                return (
                                    <li key={favorite.imdbID}>
                                        {favorite.title} ({favorite.year})
                                        <button
                                            type="button"
                                            onClick={_ => {this.deleteFavClick(favorite.imdbID)}}
                                        >
                                            x
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
                            onClick={_ => {this.saveClick(this.state.favorites)}}
                            disabled={this.state.favorites.length === 0}
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