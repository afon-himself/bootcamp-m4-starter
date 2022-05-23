export const fetchMovies = async (filmName) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${filmName}&apikey=8c6c9614`
    );
    const data = await response.json();
  
    return data;
  };
  
  export const saveFetchMovieList = async (payload) => {
    const response = await fetch(
      "https://acb-api.algoritmika.org/api/movies/list",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  };
  
  export const getMoviesID = async (listId) => {
    const response = await fetch(
      `https://acb-api.algoritmika.org/api/movies/list/${listId}`
    );
    const data = await response.json();
  
    return data;
  };
  
  export const gethMoviesInfo = async (movieId) => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${movieId}&apikey=b14a1940`
    );
    const data = await response.json();
  
    return data;
  };