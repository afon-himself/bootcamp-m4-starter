const initialState = {
    movies: [
        {
            isInFavorites: false,
            imdbID: 'tt3896198',
            title: "Guardians of the Galaxy Vol. 2",
            year: 2017,
            poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

        },
        {
            isInFavorites: false,
            imdbID: 'tt0068646',
            title: "The Godfather",
            year: 1972,
            poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

        }
    ],
  };

function reducer(state = initialState, action) {
    let movie;
    switch(action.type) {
        case 'SEARCH':
            console.log(action.payload)
            return {
                movies: action.payload
            };

        case 'ADD_MOVIE_TO_LIST':
            movie = state.movies.find(item => item.imdbID === action.payload.imdbID)
            movie.isInFavorites = true;

            return state;

        case 'REMOVE_MOVIE_FROM_LIST':
            movie = state.movies.find(item => item.imdbID === action.payload.imdbID)
            movie.isInFavorites = false;

            return state;
        
        default:
          return state;
      }
    
  }
export default reducer;