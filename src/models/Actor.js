const sequelize = require("../utils/connection");
const { DataTypes } = require("sequelize");

const Actor = sequelize.define("actor", {
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  nationality: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Actor;
