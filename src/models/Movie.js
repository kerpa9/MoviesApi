const sequelize = require("../utils/connection");
const { DataTypes } = require("sequelize");

const Movie = sequelize.define("movie", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  releaseYear: {
    type: DataTypes.SMALLINT,
  },
});

module.exports = Movie;
