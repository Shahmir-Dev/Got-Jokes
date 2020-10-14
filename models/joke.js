// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
    const Jokes = sequelize.define("Jokes", {
      // Giving the Author model a name of type STRING
      joke: DataTypes.STRING
    });

};