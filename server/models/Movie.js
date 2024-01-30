const fs = require('fs');
const path = require('path');

const movieFilePath = path.join(__dirname, '../movies.json');

const readMoviesFromFile = () => {
  const moviesData = fs.readFileSync(movieFilePath, 'utf-8');
  return JSON.parse(moviesData);
};

const writeMoviesToFile = (movies) => {
  fs.writeFileSync(movieFilePath, JSON.stringify(movies, null, 2), 'utf-8');
};

const getAllMovies = () => {
  return readMoviesFromFile();
};

const getMovieById = (id) => {
  const movies = readMoviesFromFile();
  return movies.find((movie) => movie.id === id);
};

const addMovie = (newMovie) => {
  const movies = readMoviesFromFile();
  movies.push(newMovie);
  writeMoviesToFile(movies);
  return newMovie;
};

const updateMovie = (id, updatedMovie) => {
  const movies = readMoviesFromFile();
  const index = movies.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    movies[index] = { ...movies[index], ...updatedMovie };
    writeMoviesToFile(movies);
    return movies[index];
  }
  return null;
};

const deleteMovie = (id) => {
  const movies = readMoviesFromFile();
  const index = movies.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    const deletedMovie = movies.splice(index, 1)[0];
    writeMoviesToFile(movies);
    return deletedMovie;
  }
  return null;
};

module.exports = { getAllMovies, getMovieById, addMovie, updateMovie, deleteMovie };
