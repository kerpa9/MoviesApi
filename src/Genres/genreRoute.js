const {
  create,
  getOne,
  update,
  remove,
  getAll,
} = require("../Genres/genreController");
const express = require("express");

const routerGenres = express.Router();

routerGenres.route("/").get(getAll).post(create);
routerGenres.route("/:id").get(getOne).put(update).delete(remove);

module.exports = routerGenres;
