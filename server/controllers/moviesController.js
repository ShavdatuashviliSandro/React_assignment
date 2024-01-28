const moviesList = [
  {
    id: "movie1",
    title: "Inception",
  },
  {
    id: "movie2",
    title: "Inception 2",
  },
];

const getMovies = (req, res) => {
  res.send(moviesList);
};

module.exports = { getMovies };
