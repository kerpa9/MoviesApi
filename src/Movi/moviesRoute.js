const { setActors } = require("../Actors/actorsController");
const { setDirectors } = require("../Directors/directorsController");
const { setGenres } = require("../Genres/genreController");
const {
  getAll,
  create,
  getOne,
  update,
  remove,
} = require("../Movi/moviesController");
const express = require("express");

const routerMovies = express.Router();

routerMovies.route("/").get(getAll).post(create);
routerMovies.route("/:id").get(getOne).put(update).delete(remove);

//movies/:id/genres
routerMovies.route("/:id/genres").post(setGenres);

//movies/:id/actors
routerMovies.route("/:id/actors").post(setActors);

//movies/:id/directors
routerMovies.route("/:id/directors").post(setDirectors);

module.exports = routerMovies;
