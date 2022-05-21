import store from '../redux/store';

const getData = (searchLine) => {
    return async _ => {
        try {
            const data = await fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=c089abf1`)
            .then(res => res.json());
            
            let movies = [];

            data.Search.forEach(item => {
                let movie = {
                    isInFavorites: false,
                    imdbID: item.imdbID,
                    title: item.Title,
                    year: item.Year,
                    poster: item.Poster
                };

                movies.push(movie);
            });

            store.dispatch({
                type: "SEARCH",
                payload: movies
            });
        }

        catch {
            store.dispatch({
                type: "ERROR"
            });
        }
    }
}

export default getData;