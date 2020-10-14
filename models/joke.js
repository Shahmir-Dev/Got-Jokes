module.exports = function(sequelize, DataTypes) {
    const Jokes = sequelize.define("Jokes", {
      // Giving the Author model a name of type STRING
      joke: DataTypes.STRING
    });

};