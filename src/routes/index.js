const express = require("express");
const routerActors = require("../Actors/actorsRoute");
const routerDirectors = require("../Directors/directorsRoute");
const routerGenres = require("../Genres/genreRoute");
const routerMovies = require("../Movi/moviesRoute");
const router = express.Router();

// colocar las rutas aquí
router.use("/actors", routerActors);
router.use("/directors", routerDirectors);
router.use("/genres", routerGenres);
router.use("/movies", routerMovies);
module.exports = router;
