const Movie = require('../models/Movie');

const getMovies = (req, res) => {
  const movies = Movie.getAllMovies();
  res.json(movies);
};

const getMovieById = (req, res) => {
  const movie = Movie.getMovieById(req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
};

const createMovie = (req, res) => {
  const { title, genre, rating } = req.body;
  if (title && genre && rating) {
    const newMovie = Movie.addMovie({ id: Date.now().toString(), title, genre, rating });
    res.status(201).json(newMovie);
  } else {
    res.status(400).json({ error: 'Invalid data' });
  }
};

const updateMovie = (req, res) => {
  const updatedMovie = Movie.updateMovie(req.params.id, req.body);
  if (updatedMovie) {
    res.json(updatedMovie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
};

const deleteMovie = (req, res) => {
  const deletedMovie = Movie.deleteMovie(req.params.id);
  if (deletedMovie) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
};

module.exports = { getMovies, getMovieById, createMovie, updateMovie, deleteMovie };
