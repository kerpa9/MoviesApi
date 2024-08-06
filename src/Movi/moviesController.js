const catchError = require("../utils/catchError");
const Movie = require("../models/Movie");
const Actor = require("../models/Actor");
const Director = require("../models/Director");
const Genre = require("../models/Genre");

const getAll = catchError(async (req, res) => {
  const results = await Movie.findAll({ include: [Actor, Director, Genre] });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Movie.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Movie.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Movie.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Movie.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

// const setActors = catchError(async (req, res) => {
//   const { id } = req.params,
//     movie = await Movie.findByPk(id);
//   await movie.setActors(req.body);
//   const movies = await movie.getActors();
//   return res.json(movies);
// });

// const setDirectors = catchError(async (req, res) => {
//   const { id } = req.params,
//     director = await Movie.findByPk(id);
//   await director.setDirectors(req.body);
//   const directors = await director.getDirectors();
//   return res.json(directors);
// });

// const setGenres = catchError(async (req, res) => {
//   const { id } = req.params,
//     genre = await Movie.findByPk(id);
//   await genre.setGenres(req.body);
//   const genres = await genre.getGenres();
//   return res.json(genres);
// });

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  // setActors,
  // setDirectors,
  // setGenres,
};
