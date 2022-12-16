export function searchMoveis(movies) {
    return {
        type: "MovieSearch",
        payload: {
        movies: movies,
        },
    };
}

export function addFavoriteList(id) {
    return {
        type: "AddFavFilm",
        payload: {
            id: id,
        },
    };
}
  

export function removeMovieFromFavoriteList(id) {
    return {
        type: "Movie list remove",
        payload: {
            id: id,
        },
    };
}


export function registerFavoriteList(listID) {
    return {
        type: "register",
        payload: {
            listID: listID,
        },
    };
}

export function getListIntoState(title, movies) {
    return {
        type: "List state",
        payload: {
            title: title,
            listMovies: movies,
        },
    };
}

export function getMovieInfoToState(movieDetails) {
    return {
        type: "Movie info",
        payload: {
            movieDetails: movieDetails,
        },
    };
}

export function getMovieInfoByImdbID(movies) {
    return function (dispatch) {
        let movieDetailsArray = [];
        movies.forEach((e) => {
            fetch(`http://www.omdbapi.com/?i=${e}&apikey=8fa5bc5d`)
            .then((res) => res.json())
            .then((data) => {
                movieDetailsArray = [...movieDetailsArray, { ...data }];
                dispatch(getMovieInfoToState(movieDetailsArray));
            })
            .catch((err) => console.log(err));
        });
    };
}

export function fetchMovies(name) {
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?s=${name}&apikey=8fa5bc5d`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(searchMoveis(data.Search));
        })
        .catch((err) => console.log(err));
    };
}

export function postList(title, favoritesIDArray) {
    return function (dispatch) {
        let savedList = {
            title: title,
            movies: favoritesIDArray,
        };
        fetch(`https://acb-api.algoritmika.org/api/movies/list/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(savedList),
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch(registerFavoriteList(data.id));
        })
        .catch((err) => console.log(err));
    };
}

export function getList(id) {
    return function (dispatch) {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch(getListIntoState(data.title, data.movies));
            dispatch(getMovieInfoByImdbID(data.movies));
        })
        .catch((err) => console.log(err));
    };
}