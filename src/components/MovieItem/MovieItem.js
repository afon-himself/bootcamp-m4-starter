import React, { Component } from 'react';
import './MovieItem.css';

import store from '../../redux/store';

class MovieItem extends Component {
    state = {
        isInFavorites: this.props.isInFavorites
    }

    click = (imdbID) => {
        if (!this.state.isInFavorites) {
            store.dispatch({
                type: 'ADD_MOVIE_TO_FAVORITES',
                payload: {
                    imdbID: imdbID
                }
            });
        }
    }

    render() {
        const { imdbID, title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={_ => this.click(imdbID)}>Add to the list</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;