const initialState = {
    movies: [
        // {
        //     isInFavorites: false,
        //     imdbID: 'tt3896198',
        //     title: "Guardians of the Galaxy Vol. 2",
        //     year: 2017,
        //     poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        // },
        // {
        //     isInFavorites: false,
        //     imdbID: 'tt0068646',
        //     title: "The Godfather",
        //     year: 1972,
        //     poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        // }
    ],

    favorites: [],

    lists: JSON.parse(localStorage.getItem('lists'))
};

if (!initialState.lists) initialState.lists = [];
if (!Array.isArray(initialState.lists)) initialState.lists = [initialState.lists];

function reducer(state = initialState, action) {
    let clone = JSON.parse(JSON.stringify(state));
    let movie;
    switch (action.type) {
        case 'SEARCH':
            clone.movies = action.payload;
            return clone;

        case 'ADD_MOVIE_TO_FAVORITES':
            movie = clone.movies.find(movie => movie.imdbID === action.payload.imdbID);

            movie.isInFavorites = true;
            clone.favorites.push(movie);

            return clone;

        case 'REMOVE_MOVIE_FROM_FAVORITES':
            movie = clone.movies.find(movie => movie.imdbID === action.payload.imdbID);

            movie.isInFavorites = false;
            clone.favorites = clone.favorites.filter(favorite => favorite.imdbID !== action.payload.imdbID);

            return clone;

        case 'ADD_LIST_TO_LISTS':
            clone = JSON.parse(JSON.stringify(state));
            clone.favorites = [];
            const list = {
                id: action.payload.id,
                title: action.payload.title,
                movies: action.payload.movies
            }
            clone.lists.push(list);

            if (!localStorage.getItem('lists'))
                localStorage.setItem('lists', JSON.stringify(list));
            else if (JSON.parse(localStorage.getItem('lists')).length > 1)
                localStorage.setItem('lists', JSON.stringify([...JSON.parse(localStorage.getItem('lists')), list]));
            else
                localStorage.setItem('lists', JSON.stringify([JSON.parse(localStorage.getItem('lists')), list]));

            return clone;
        
        default:
          return state;
      }
    
  }
export default reducer;