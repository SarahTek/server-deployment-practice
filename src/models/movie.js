const { Movie } = require('../db');

const createMovie = async (req, res) => {
  const { nameOfMovie , typeOfMovie, releaseDate } = req.body;

  const movie = Movie.build({ nameOfMovie, typeOfMovie, releaseDate });
  await movie.save();
  res.status(200).send(movie);
};

const listMovies = async (req, res) => {
  const usersMovie = await Movie.findAll();
  res.status(200).send(usersMovie);
};


const getMovie= async (req, res) => {
  const movies = await Movie.findAll({
    where: {
      id: req.params.id,
    },
  });

  if (movies.length > 0) {
    res.status(200).send(movies[0]);
  } else {
    res.status(404).send(`Could not find user with id ${req.params.id}`);
  }
};

// update


module.exports = {
  createMovie,
  listMovies,
  getMovie,
};
