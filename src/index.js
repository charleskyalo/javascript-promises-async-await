
import { fetchBooks, fetchMovies } from './services';

function getBooksAndMovies() {
    return Promise.all([fetchBooks(), fetchMovies()])
        .then(([books, movies]) => ({
            books,
            movies
        }))
        .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();

getBooksAndMoviesPromise.then(results => console.log('getBooksAndMoviesPromise', results))

function getBooksorMovies() {
    return Promise.race([fetchMovies(), fetchBooks()])
        .then(results => results)
        .catch(error => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksorMovies();
getBooksOrMoviesPromise.then(results => console.log('getBooksOrMoviesPromise', results))