import React from "react";
import "./MovieItem.css";
import { addFavoriteList } from "../../redux/actions/actions";
import { connect } from "react-redux";

function MovieItem({ Title, Year, Poster, imdbID, favoriteList, addFavoriteList }) {
    const ifIdInFavorites = (imdbID) => {
        const active = favoriteList.find((item) => {
            return item.imdbID === imdbID;
        });
        if (active) {
            return true;
        }
    };

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">
                    {Title} ({Year})
                </h3>
                <button
                    type="button"
                    className="movie-item__add-button"
                    onClick={(e) => {
                        addFavoriteList(imdbID);
                    }}
                    disabled={ifIdInFavorites(imdbID)}
                >
                    {ifIdInFavorites(imdbID) ? `Добавлено` : "Добавить в список"}
                </button>
            </div>
        </article>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        addFavoriteList: (imdbID) => {
            dispatch(addFavoriteList(imdbID));

        },
    };
};

const mapStateToProps = (state) => {
    return {
        favoriteList: state.favoriteList,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
