const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

Movie.belongsToMany(Actor, { through: "actorMovies" });
Actor.belongsToMany(Movie, { through: "actorMovies" });

Director.belongsToMany(Movie, { through: "directorsMovie" });
Movie.belongsToMany(Director, { through: "directorsMovie" });

Genre.belongsToMany(Movie, { through: "genresMovie" });
Movie.belongsToMany(Genre, { through: "genresMovie" });
