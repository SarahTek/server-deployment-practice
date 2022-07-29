// const { Movie } = require('../db');

// const createMovie = async (req, res) => {
//   const { nameOfMovie , typeOfMovie, releaseDate } = req.body;

//   const movie = Movie.build({ nameOfMovie, typeOfMovie, releaseDate });
//   await movie.save();
//   res.status(200).send(movie);
// };

// const listMovies = async (req, res) => {
//   const usersMovie = await Movie.findAll();
//   res.status(200).send(usersMovie);
// };


// const getMovie= async (req, res) => {
//   const movies = await Movie.findAll({
//     where: {
//       id: req.params.id,
//     },
//   });

//   if (movies.length > 0) {
//     res.status(200).send(movies[0]);
//   } else {
//     res.status(404).send(`Could not find user with id ${req.params.id}`);
//   }
// };


// // update
// const updateMovie = async (req, res ) => {
//   const [movieUpdate] =  await Movie.findAll(
//     {
//       where: {
//         id: req.params.id,
//       },
//     });
//   movieUpdate.nameOfMovie =  req.body.nameOfMovie
//   movieUpdate.typeOfMovie= req.body.typeOfMovie,
//   movieUpdate.releaseDate= req.body.releaseDate,
//   await movieUpdate.save();
//   res.status(200).send('Movie is updated');
// };


// //delete

// const deleteMovie = async (req, res) => {
//   const deletedMovie = await Movie.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });
//   if(deletedMovie === 0) res.status(404).send('no movies found');
//   else{
//     res.status(200).send('Movie is deleted');
//   }
// };


// module.exports = {
//   createMovie,
//   listMovies,
//   getMovie,
//   updateMovie,
//   deleteMovie,
// };
